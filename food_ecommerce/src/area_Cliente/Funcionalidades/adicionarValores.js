var item;
var tip;
var dado = JSON.parse(localStorage.getItem('Modelo'))

export function addValores(){

    var reload;      
    reload = dado

    if(localStorage.getItem('Pedido') === null){

      reload['Itens'].forEach((element, index)=> {
        if(element['Item']['Valor'].length === 0){
          reload['Itens'][index]['Item']['Quantidade'] = Valor

          var h;

          switch(element['Item']['Tipo']){

            case 'Pastel':
              h = JSON.parse(localStorage.getItem('menu_pasteis'))
              break

              case 'Frances':
                h = JSON.parse(localStorage.getItem('menu_frances'))
                break

                case 'Suico':
                  h = JSON.parse(localStorage.getItem('menu_suicos'))
                  break

                  case 'Bebida':
                    h = JSON.parse(localStorage.getItem('menu_bebidas'))
                    break

                    case 'Hamburguer':
                      h = JSON.parse(localStorage.getItem('menu_hamburgues'))
                      break

                      default:
                        break
          };

          for (item in h){
            var verf = element['Item']['Sabor'] in h[item]
            
            if(verf === true){
            var o = Object.values(h[item][element['Item']['Sabor']])

              reload['Itens'][index]['Item']['Valor'] = o[0]
              reload['Itens'][index]['Item']['Sabor'] = reload['Itens'][index]['Item']['Sabor'].split("-")
              localStorage.setItem('Modelo', JSON.stringify(reload))

            }
          }
        }
      });
      
    }else{
      console.log('awer')
      reload['Itens'].forEach((element, index)=> {
        if(element['Item']['Valor'].length === 0){
          reload['Itens'][index]['Item']['Quantidade'] = Valor

          var h;

          switch(element['Item']['Tipo']){

            case 'Pastel':
              h = JSON.parse(localStorage.getItem('menu_pasteis'))
              break

              case 'Frances':
                h = JSON.parse(localStorage.getItem('menu_frances'))
                break

                case 'Suico':
                  h = JSON.parse(localStorage.getItem('menu_suicos'))
                  break

                  case 'Bebida':
                    h = JSON.parse(localStorage.getItem('menu_bebidas'))
                    break

                    case 'Hamburguer':
                      h = JSON.parse(localStorage.getItem('menu_hamburgues'))
                      break

                      default:
                        break
          };

          for (item in h){
            var verf = element['Item']['Sabor'] in h[item]
            
            if(verf === true){
            var o = Object.values(h[item][element['Item']['Sabor']])

              reload['Itens'][index]['Item']['Valor'] = o[0]
              reload['Itens'][index]['Item']['Sabor'] = reload['Itens'][index]['Item']['Sabor'].split("-")
              localStorage.setItem('Modelo', JSON.stringify(reload))

            }
          }
        }
      });

    }
  }