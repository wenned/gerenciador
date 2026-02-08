export async function fetchPedido(pedidoId) {

    try {

        const resposta = await fetch(`http://192.168.31.35:8080/pedidoUnico/${pedidoId}`);
        const resp = await resposta.json();
        return resp

    } catch (error) {
        console.log('ERRO AO BUSCAR PEIDO',error)
        
    }
    
}

export async function apagar(...args){
    
    switch(args[0]){
        case 'pagar':

            try {
                apagarLocal()
                const IdPedido = await fetch(`http://192.168.31.35:8080/mesas/${args[1]}/${args[2][0]}`);
                const RespostaId = await IdPedido.json()
                const Body = {'operacao':2, 'id':RespostaId._id}
                const Resposta =  await fetch(`http://192.168.31.35:8080/entrada/alteraMesa`, 
                                            {
                                                method: 'PUT',
                                                body:JSON.stringify(Body),
                                                headers: {"Content-type": "application/json; charset=UTF-8"}
                                            });
                
                return Resposta
            } catch (error) {
                console.log('ALGO ERRADO NO FECHAMENTO MESA', error)
            }
            break

        default:
            break
    }
};

export async function removeElemnto(...args){

    try {
        const [IdP, Index] = args
        const bodY = {'id': IdP, 'index': Index}

        const RETORNO_DADOS = await fetch(`http://192.168.31.35:8080/entrada/removerItemPedido`, {
            method: `PUT`,
            body: JSON.stringify(bodY),
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