
export function addValores(...args){

  const [valores, Valor] = args

  var novoPedido;      
  novoPedido = JSON.parse(localStorage.getItem('Modelo'))

  novoPedido['Itens'].forEach((element, index)=> {

    if(element['Item']['Valor'].length === 0){
      novoPedido['Itens'][index]['Item']['Valor'] = valores
      novoPedido['Itens'][index]['Item']['Quantidade'] = Valor
      novoPedido['Itens'][index]['Item']['Sabor'] = novoPedido['Itens'][index]['Item']['Sabor'].split(" ")
    };

  });

  localStorage.setItem('Modelo', JSON.stringify(novoPedido))

};

export function adicionarTipo(tipo){

  var pedidoAtualizado;      
  pedidoAtualizado = JSON.parse(localStorage.getItem('Modelo'))

  pedidoAtualizado['Itens'].forEach((element, index)=> {
    
    if(element['Item']['Valor'].length === 0){
      pedidoAtualizado['Itens'][index]['Item']['Sabor'] = tipo
      localStorage.setItem('Modelo', JSON.stringify(pedidoAtualizado))
    };

  });
};