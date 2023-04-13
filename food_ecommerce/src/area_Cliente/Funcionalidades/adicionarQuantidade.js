var Model = {
    "Data":"",
    "Itens":"",
    "valor_total": "",
    "Status":"Pendente",
    "Id":"",
    "Nu_Pedido":""
}

var dadosInsert;

export async function adicionarTipo(arg){

    if(localStorage.getItem('Pedido') === null){

        if(localStorage.getItem('Modelo')){

            dadosInsert = JSON.parse(localStorage.getItem('Modelo'))

            var NewItem = {"Item":{"Sabor":[], "Valor": "", "Quantidade":"", "Tipo":"","Status":["Pendente","false"]}}
            NewItem['Item']['Tipo'] = arg
            dadosInsert['Itens'].push(NewItem)
            localStorage.setItem('Modelo', JSON.stringify(dadosInsert))

        }else{
            var PEDIDO = [{"Item":{"Sabor":[], "Valor": "", "Quantidade":"", "Tipo":"","Status":["Pendente","false"]}}]
            PEDIDO[0]['Item']['Tipo'] = arg
            Model['Itens']= PEDIDO
            localStorage.setItem('Modelo', JSON.stringify(Model))
        }
    }else{
        
        if(localStorage.getItem('Modelo')){

            dadosInsert = JSON.parse(localStorage.getItem('Modelo'))

            var PEds = {"Item":{"Sabor":[], "Valor": "", "Quantidade":"", "Tipo":"","Status":["Pendente","false"]}}
            PEds['Item']['Tipo'] = arg
            dadosInsert['Itens'].push(PEds)
            localStorage.setItem('Modelo', JSON.stringify(dadosInsert))

        }else{

            const pedidoId = localStorage.getItem('Pedido');
            // await fetch(`http://192.168.3.52:8080/pedido/${pedidoId}`)

            await fetch(`http://192.168.31.3:8080/pedido/${pedidoId}`)
            // await fetch(`http://192.168.2.9:8080/pedido/${pedidoId}`)
            .then((res) =>{
                return res.json()
            }).then(doc =>{
                localStorage.setItem('temp', JSON.stringify(doc))
            });

            dadosInsert = JSON.parse(localStorage.getItem('temp'))

            var itemPedido = {"Item":{"Sabor":[], "Valor": "", "Quantidade":"", "Tipo":"","Status":["Pendente","false"]}}
            itemPedido['Item']['Tipo'] = arg
            dadosInsert['Itens'].push(itemPedido)
            localStorage.setItem('Modelo', JSON.stringify(dadosInsert))
        }
    }
}