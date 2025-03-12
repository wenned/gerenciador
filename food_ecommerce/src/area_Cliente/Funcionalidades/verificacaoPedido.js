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

    var itemInserir = 	{
		"first_id":"",
		"item":[{"Item": {
							"Sabor":"",
							"Valor": 0,
							"Quantidade":"",
							"Tipo": false,
							"Status": ["Pendente","false"],
							"Adicional": ""
			}
		}]
	}

    var itemProximo = {
            "Item": {
                "Sabor": "",
                "Valor": 0,
                "Quantidade": "",
                "Tipo": false,
                "Status": ["Pendente","false"],
                "Adicional": ""
            }			
        }

    try {
        
        if(localStorage.getItem('Modelo') === null && localStorage.getItem('id') ===null){

            const getPedido = localStorage.getItem('Pedido')
            const result = await fetchPedido(getPedido)
            itemInserir['first_id'] = result['_id']
            localStorage.setItem('id', JSON.stringify(itemInserir))  

        }else{

            if(localStorage.getItem('Modelo')){
                var proximoItemModelo = JSON.parse(localStorage.getItem('Modelo'));
                proximoItemModelo.Itens.push(itemProximo)
                localStorage.setItem('Modelo', JSON.stringify(proximoItemModelo))

            }else{
                var cont = 0;
                const verificar = JSON.parse(localStorage.getItem('id'))

                verificar.item.forEach((e)=>{ if( e.Item.Valor === 0){ cont++ }});

                if(cont === 0){

                    var proximoItem = JSON.parse(localStorage.getItem('id'));
                    proximoItem.item.push(itemProximo)
                    localStorage.setItem('id', JSON.stringify(proximoItem))

                }
            }
        }
    } catch (error) {
        console.error('Erro capturado: ', error)
    }
}

