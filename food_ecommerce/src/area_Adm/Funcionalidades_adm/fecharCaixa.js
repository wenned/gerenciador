export async function verificarCaixa(...args){
    const dadosVerificacao = {"nome" : args[0], "id" : args[1] }

     const Url = 'http://192.168.31.3:8080/conferirCaixa'
     const Metodo = 'PUT'

    const response = await fetch(Url, {
        method: `${Metodo}`,
        body: JSON.stringify(dadosVerificacao),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    });
    
    const data = await response.json();
    return data
}

export async function carregaCaixas(){
    var dados = []
    const resposta = await fetch(`http://192.168.31.3:8080/caixas`);
    const Caixas = await resposta.json();
    
    for (var i=0; i < Caixas.length; i++){
        if(Caixas[i].Verificado === false){
            dados.push(Caixas[i])
        }
    };
    return dados
}


export async function fecharCaixa(...args){
    
    var DADOS_FECHAMENTO ={
        "Nome":"",
        "Data":"",
        "Itens":"",
        "Valor_Lancamento":"",
        "Valor_Total":"",
        "Verificador":"",
        "Verificado":false,
        "Id":""
    }

    const [itens, data, ValorTotal, nome, saldodia] = args

    let result = '';
	const characters = 'ABCDEFGHIJLMNOPQRSTUVXZWYabdcedefghijlmnopqrstuvzxyw0123456789';
	const charactersLength = characters.length;
	let counter = 0;

	while (counter < 19){
		result+= characters.charAt(Math.floor(Math.random()*charactersLength));
		counter+=1
	}

    DADOS_FECHAMENTO['Nome'] = nome
    DADOS_FECHAMENTO['Data'] = data
    DADOS_FECHAMENTO['Itens'] = itens
    DADOS_FECHAMENTO['Valor_Lancamento'] = ValorTotal
    DADOS_FECHAMENTO['Valor_Total'] = saldodia
    DADOS_FECHAMENTO['Id'] = result

    try {
        const RETORNO_DADOS = await fetch(`http://192.168.31.3:8080/fechamento_caixa/`, {
            method: `POST`,
            body: JSON.stringify(DADOS_FECHAMENTO),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });
        
        const DATA = await RETORNO_DADOS.json();
        return DATA

    } catch (error) {
        console.error('Deu erro aqui ',error)
    }

}
