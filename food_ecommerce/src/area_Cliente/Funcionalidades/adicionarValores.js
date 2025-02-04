
export function addValores(...args){

  const [valores, Valor] = args

  try {

    if(localStorage.getItem('Modelo') !== null){
     
      var novoPedido = JSON.parse(localStorage.getItem('Modelo'))
    
      novoPedido['Itens'].forEach((element, index)=> {
    
        if(element['Item']['Valor'] === 0){
          novoPedido['Itens'][index]['Item']['Valor'] = valores
          novoPedido['Itens'][index]['Item']['Quantidade'] = Valor
          novoPedido['Itens'][index]['Item']['Sabor'] = novoPedido['Itens'][index]['Item']['Sabor'].split(" ")
        };
    
      });
    
      localStorage.setItem('Modelo', JSON.stringify(novoPedido))

    }else{
      var novoItem = JSON.parse(localStorage.getItem('id'))

      novoItem.item.forEach((element, index)=> {
    
        if(element.Item.Valor === 0){
          novoItem.item[index].Item.Valor = valores
          novoItem.item[index].Item.Quantidade = Valor
          novoItem.item[index].Item.Sabor = novoItem.item[index].Item.Sabor.split(" ")
        };
      });
    
      localStorage.setItem('id', JSON.stringify(novoItem))
    };
  } catch (error) {
    console.log(error)
  };
};

export function adicionarTipo(tipo){

  try {
    if (localStorage.getItem('Modelo') !== null) {
      var primeiroPedido = JSON.parse(localStorage.getItem('Modelo'))
    
      primeiroPedido['Itens'].forEach((element, index)=> {
        
        if(element['Item']['Valor'] === 0){
          primeiroPedido['Itens'][index]['Item']['Sabor'] = tipo
          localStorage.setItem('Modelo', JSON.stringify(primeiroPedido))
        };
    
      });

    } else {

      let atualizacaoPedido = JSON.parse(localStorage.getItem('id')) 

      atualizacaoPedido.item.forEach((element, index)=> {
        
        if(element.Item.Valor === 0){
          atualizacaoPedido.item[index].Item.Sabor = tipo
          localStorage.setItem('id', JSON.stringify(atualizacaoPedido))
        };
    
      });
    }
    
  } catch (error) {
    console.log(error)
  }
};