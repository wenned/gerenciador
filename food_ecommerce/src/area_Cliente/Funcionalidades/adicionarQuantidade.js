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

            dadosInsert.Itens.forEach((element, index) => {
                if(element.Item.Valor === 0){
                    dadosInsert.Itens[index].Item.Tipo = arg
                    localStorage.setItem('Modelo', JSON.stringify(dadosInsert))
                }
            });
 
        }else{
            var PEDIDO = [{"Item":{"Sabor":[], "Valor": 0, "Quantidade":"", "Tipo":"","Status":["Pendente","false"], "Adicional":""}}]
            PEDIDO[0]['Item']['Tipo'] = arg
            Model['Itens']= PEDIDO
            localStorage.setItem('Modelo', JSON.stringify(Model))
        }

    }else{
        
        if(localStorage.getItem('id')){

            dadosInsert = JSON.parse(localStorage.getItem('id'))

            dadosInsert.item.forEach((element, index) => {
                if(element.Item.Tipo === false){
                    dadosInsert.item[index].Item.Tipo = arg
                    localStorage.setItem('id', JSON.stringify(dadosInsert))
                }
                
            });
        }
    }
}