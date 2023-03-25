import style from './styles/Quantidade.module.css'
import { Link } from 'react-router-dom';
import Logo from '../componentes/Logo'
import { useState } from 'react';


// IMAGENS 
import carne from './imagens/carne.png'
import queijo from './imagens/Queijo.png'
import carnequeijo from './imagens/CarneQueijo.png'
import palmitoqueijo from './imagens/palmitoqueijo.png'
import bananaqueijocanela from './imagens/bananaqueijocanela.png'
import bananaqueijochocolate from './imagens/bananaqueijochocolate.png'






function Quantidade(){

    const imagensItens = {
      "Carne": carne,
      "Queijo": queijo,
      "Carne-Queijo": carnequeijo,
      "Palmito-Queijo": palmitoqueijo,
      "Banana-Queijo-Canela": bananaqueijocanela,
      "Banana-Queijo-Chocolate": bananaqueijochocolate,

    }
    

    const [Valor, setValor] = useState(0)
         
    var item;
    var dado = JSON.parse(localStorage.getItem('Modelo'))

    if(dado === null){
      //
    }else{
      dado['Itens'].forEach((element, index)=> {
          if(element['Item']['Valor'].length === 0 ){
            item = element['Item']['Sabor']

          }
        });

    }

    function addValores(){

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
              //  reload['valor_total'] = Valor * parseFloat(o[0])
  
                reload['Itens'][index]['Item']['Valor'] = o[0]
                reload['Itens'][index]['Item']['Sabor'] = reload['Itens'][index]['Item']['Sabor'].split("-")
                localStorage.setItem('Modelo', JSON.stringify(reload))
  
              }
            }
          }
        });
        
      }else{
        // =============================================================================
        
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
              //  reload['valor_total'] = Valor * parseFloat(o[0])
  
                reload['Itens'][index]['Item']['Valor'] = o[0]
                reload['Itens'][index]['Item']['Sabor'] = reload['Itens'][index]['Item']['Sabor'].split("-")
                localStorage.setItem('Modelo', JSON.stringify(reload))
  
              }
            }
          }
        });

      }
    }


    return (
      <>
        <section className={style.conteiner}>
            <h1>{item}</h1>
            <div className={style.IMg}><img src={imagensItens[item]} alt='Imagem Pastel'/></div>

            <div className={style.conteiner_Button}>

                <button onClick={() =>{
                    if(Valor > 0){
                        setValor(Valor - 1)
                        }
                    }} className={style.But}>-</button>

                <span className={style.Valor}>{Valor}</span>

                <div onClick={()=>setValor(Valor + 1)} className={style.But}>+</div>
        
            </div>

            <div>
                <Link onClick={addValores} to='/tipo/newitem'>
                    <div className={style.Novo}>Adicionar Novo Item</div>
                </Link>
            </div>

            <div>
                <Link to='/finalizar'>
                    <div onClick={()=>{ addValores()}} className={style.New}>Finalizar</div>
                </Link>
            </div>
        </section>
        <div className={style.Log}><Logo/></div>

    </>
    )
};

export default Quantidade;