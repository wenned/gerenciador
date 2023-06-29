import { fetchPedido } from "./buscarPedido";

export function verificarPropriedadesPedido(){

    var dadosGravar;
    const dadosTroca =[]
    const MD = JSON.parse(localStorage.getItem('Modelo'))

    if(MD !== null){    
        
        dadosGravar = MD

        for(var cont=0; cont < MD.Itens.length; cont++){
            if(MD.Itens[cont]['Item']['Quantidade'] > 0){
                dadosTroca.push(MD.Itens[cont])
            }  
        }

        dadosGravar.Itens = dadosTroca
        localStorage.setItem('Modelo', JSON.stringify(dadosGravar))
    }
};

export async function pegarPedido(){

    const getPedido = localStorage.getItem('Pedido')
    const result = await fetchPedido(getPedido)
    localStorage.setItem('Modelo', JSON.stringify(result))

}