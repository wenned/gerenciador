export async function verificarCaixa(...args){

    const Url = 'http://192.168.31.3:8080/input/verificar'
    const Metodo = 'PUT'

    const response = await fetch(Url, {
        method: `${Metodo}`,
        body: JSON.stringify(args),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    });
    
    const data = await response.json();
    return data
}


export async function fecharCaixa(...args){
    
    var DADOS_FECHAMENTO =[{
        "Nome":"",
        "Data":"",
        "Itens":"",
        "Valor_Lancamento":"",
        "Valor_Total":"",
        "Verificador":"",
        "Verificado":false,
        "Id":""
    }]

    const [itens, data, ValorTotal, nome, saldodia] = args

    let result = '';
	const characters = 'ABCDEFGHIJLMNOPQRSTUVXZWYabdcedefghijlmnopqrstuvzxyw0123456789';
	const charactersLength = characters.length;
	let counter = 0;

	while (counter < 19){
		result+= characters.charAt(Math.floor(Math.random()*charactersLength));
		counter+=1
	}

    DADOS_FECHAMENTO[0]['Nome'] = nome
    DADOS_FECHAMENTO[0]['Data'] = data
    DADOS_FECHAMENTO[0]['Itens'] = itens
    DADOS_FECHAMENTO[0]['Valor_Lancamento'] = ValorTotal
    DADOS_FECHAMENTO[0]['Valor_Total'] = saldodia
    DADOS_FECHAMENTO[0]['Id'] = result

    try {
        const RETORNO_DADOS = await fetch(`http://192.168.31.3:8080/fechamento_caixa/`, {
            method: `POST`,
            body: JSON.stringify(DADOS_FECHAMENTO[0]),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });
        
        const DATA = await RETORNO_DADOS.json();
        return DATA

    } catch (error) {
        console.log('Deu erro aqui ',error)
    }

}
