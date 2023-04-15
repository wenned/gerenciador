const umeroPedido = localStorage.getItem('Pedido')
const MESAKEY =JSON.parse(localStorage.getItem('Key'))

export async function fetchPedido(pedidoId) {

    // const resposta = await fetch(`http://192.168.3.52:8080/pedido/${pedidoId}`);
   const resposta = await fetch(`http://192.168.31.3:8080/pedido/${pedidoId}`);
    // const resposta = await fetch(`http://192.168.2.9:8080/pedido/${pedidoId}`);

    return resposta.json();
}

export async function apagar(...args){

    switch(args[0]){

        case 'pagar':
            const APAGARKE = await fetch(`http://192.168.31.3:8080/mesa/${MESAKEY[1]['Mesa']}/${args[0]}`);
            return APAGARKE.json();

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