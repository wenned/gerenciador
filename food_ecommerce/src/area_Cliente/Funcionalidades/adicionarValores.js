var dado = JSON.parse(localStorage.getItem('Modelo'))

export function addValores(...args){

  const [valores, Valor] = args

  var reload;      
  reload = dado

  if(localStorage.getItem('Pedido') === null){
    console.log('')
    reload['Itens'].forEach((element, index)=> {
 
      if(element['Item']['Valor'].length === 0){
        console.log('')
        reload['Itens'][index]['Item']['Valor'] = valores
        reload['Itens'][index]['Item']['Quantidade'] = Valor
        reload['Itens'][index]['Item']['Sabor'] = reload['Itens'][index]['Item']['Sabor'].split(" ")
      };

    });

    localStorage.setItem('Modelo', JSON.stringify(reload))

  }else{

      // reload['Itens'].forEach((element, index)=> {

      // if(element['Item']['Valor'].length === 0){
      //     reload['Itens'][index]['Item']['Sabor'] = reload['Itens'][index]['Item']['Sabor'].split("-")
      // };

      // localStorage.setItem('Modelo', JSON.stringify(reload))

      // });
    };
  };