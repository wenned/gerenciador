var Model = {
    "Itens":"",
    "valor_total": "",
    "Status":"Pendente",
    "Nu_Pedido":"",
}

var dadosInsert;

export async function adicionarTipo(arg){

    if(localStorage.getItem('Pedido') === null){

        if(localStorage.getItem('Modelo')){

            dadosInsert = JSON.parse(localStorage.getItem('Modelo'))

            var NewItem = {"Item":{"Sabor":[], "Valor": "", "Quantidade":"", "Tipo":"", "Status":["Pendente","false"],"Adicional":""}}
            NewItem['Item']['Tipo'] = arg
            dadosInsert['Itens'].push(NewItem)
            localStorage.setItem('Modelo', JSON.stringify(dadosInsert))

        }else{
            var PEDIDO = [{"Item":{"Sabor":[], "Valor": "", "Quantidade":"", "Tipo":"","Status":["Pendente","false"], "Adicional":""}}]
            PEDIDO[0]['Item']['Tipo'] = arg
            Model['Itens']= PEDIDO
            localStorage.setItem('Modelo', JSON.stringify(Model))
        }
    }else{
        
        if(localStorage.getItem('Modelo')){

            dadosInsert = JSON.parse(localStorage.getItem('Modelo'))

            var PEds = {"Item":{"Sabor":[], "Valor": "", "Quantidade":"", "Tipo":"","Status":["Pendente","false"]}, "Adicional":""}
            PEds['Item']['Tipo'] = arg
            dadosInsert['Itens'].push(PEds)
            localStorage.setItem('Modelo', JSON.stringify(dadosInsert))

        }
    }
}