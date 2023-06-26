const umeroPedido = localStorage.getItem('Pedido')

export async function fetchPedido(pedidoId) {

    const resposta = await fetch(`http://192.168.31.3:8080/pedidoUnico/${pedidoId}`);
    return resposta.json();
    
}

export async function apagar(...args){

    switch(args[0]){

        case 'pagar':

            try {
                const IdPedido = await fetch(`http://192.168.31.3:8080/Mesa/${args[1]}`);

                const RespostaId = await IdPedido.json()
                const Body = [{'Id':RespostaId[0]['_id'], 'Operacao':2}]

                const Resposta =  await fetch(`http://192.168.31.3:8080/entrada/alterarStatusMesa`, 
                                            {
                                                method: 'PUT',
                                                body:JSON.stringify(Body),
                                                headers: {"Content-type": "application/json; charset=UTF-8"}
                                            });
                apagarLocal()
                return Resposta
            } catch (error) {
                console.log('ALGO ERRADO NO FECHAMENTO MESA', error)
            }
            break
        
//ABAIXAO AINDA NAO FOI REVISADO

        case 'deletar':
            const APAGARKEY = await fetch(`http://192.168.31.3:8080/mesa/${umeroPedido}/${args[0]}`);
            return APAGARKEY.json();                
            
        default:
            break
    }
};

export async function removeElemnto(...args){

    try {
        const RETORNO_DADOS = await fetch(`http://192.168.31.3:8080/input/remover`, {
            method: `PUT`,
            body: JSON.stringify(args),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });
        
        const DATA = await RETORNO_DADOS.json();
        return DATA

    } catch (error) {
        console.log('Deu erro aqui ',error)
    }
}

function apagarLocal(){
    
    const REMOVE = ['Key', 'Pedido']

    for(var REMOVKEY=0; REMOVKEY < REMOVE.length; REMOVKEY++){
        localStorage.removeItem(REMOVE[REMOVKEY])
    }
}