import style from './styles/Quantidade.module.css'
import { Link } from 'react-router-dom';
import Logo from '../componentes/Logo'
import { useState } from 'react';


// IMAGENS PASTEIS
import carne from './imagens/carne.png'
import queijo from './imagens/Queijo.png'
import carnequeijo from './imagens/CarneQueijo.png'
import palmitoqueijo from './imagens/palmitoqueijo.png'
import bananaqueijochocolate from './imagens/bananaqueijochocolate.png'
import calabresa from './imagens/calabresa.png'
import frangoqueijo from './imagens/frangoqueijo.png'
import frangocheddar from './imagens/frangocheddar.png'
import frango from './imagens/frango.png'
import carnesol from './imagens/carnesol.png'
import carnesolqueijo from './imagens/carnesolqueijo.png'
import presuntoqueijo from './imagens/presuntoqueijo.png'
import carnecheddar from './imagens/carnecheddar.png'
import carnecatupiry from './imagens/carnecatupiry.png'
import carnebacon from './imagens/carnebacon.png'
import frangocatupiry from './imagens/frangocatupiry.png'
import frangopalmito from './imagens/frangopalmito.png'
import frangocalabresa from './imagens/frangocalabresa.png'
import frangobacon from './imagens/frangobacon.png'
import calabresaqueijo from './imagens/calabresaqueijo.png'
import carnesolbacon from './imagens/carnesolbacon.png'
import carnesolcheddar from './imagens/carnesolcheddar.png'
import carnesolcatupiry from './imagens/carnesolcatupiry.png'
import bananaqueijocanelap from './imagens/bananaqueijocanelap.png'
import bananachocolate from './imagens/bananachocolate.png'
import chocolatequeijo from './imagens/chocolatequeijo.png'
import goiabadaqueijo from './imagens/goiabadaqueijo.png'


//IMAGENS FRANCES

import pizzaf from './imagens/pizzaf.png'
import palmitoqueijof from './imagens/palmitoqueijof.png'
import frangocatupiryf from './imagens/frangocatupiryf.png'
import bananaqueijocanelaf from './imagens/bananaqueijocanelaf.png'
import bananaqueijochocolatef from './imagens/bananaqueijochocolatef.png'
import goiabadaqueijof from './imagens/goiabadaqueijof.png'
import frangocalabresaf from './imagens/frangocalabresaf.png'
import frangopalmitof from './imagens/frangopalmitof.png'
import frangocheddarf from './imagens/frangocheddarf.png'
import frangobaconf from './imagens/frangobaconf.png'
import carnesolqueijof from './imagens/carnesolqueijof.png'
import carnesolcheddarf from './imagens/carnesolcheddarf.png'
import carnesolcatupiryf from './imagens/carnesolcatupiryf.png'
import carnesolbaconf from './imagens/carnesolbaconf.png'
import frangoazeitonaf from './imagens/frangoazeitonaf.png'
import carnesolazeitonaf from './imagens/carnesolazeitonaf.png'
import carnesolpalmitof from './imagens/carnesolpalmitof.png'
import carnesolbananaf from './imagens/carnesolbananaf.png'

// BEBIDAS

import laranja from './imagens/laranja.png'
import acerola from './imagens/acerola.png'
import maracuja from './imagens/maracuja.png'
import cocalata from './imagens/cocalata.png'
import fantalata from './imagens/fantalata.png'
import pepsilata from './imagens/pepsilata.png'
import guaranalata from './imagens/guaranalata.png'
import guaranalitro from './imagens/guaranalitro.png'
import cocalitro from './imagens/cocalitro.png'
import fantalitro from './imagens/fantalitro.png'
import agua from './imagens/agua.png'
import aguagas from './imagens/aguagas.png'


// IMAGENS SUICO

import salsichaqueijos from './imagens/salsichaqueijos.png'

    const Pastel = {
      "Carne": carne,
      "Queijo": queijo,
      "Carne-Queijo": carnequeijo,
      "Palmito-Queijo": palmitoqueijo,
      "Banana-Queijo-Chocolate": bananaqueijochocolate,
      "Calabresa": calabresa,
      "Frango-Queijo": frangoqueijo,
      "Frango-Cheddar": frangocheddar,
      "Frango": frango,
      "Carnesol": carnesol,
      "Carnesol-Queijo": carnesolqueijo,
      "Presunto-Queijo": presuntoqueijo,
      "Carne-Cheddar": carnecheddar,
      "Carne-Catupiry": carnecatupiry,
      "Carne-Bacon": carnebacon,
      "Frango-Catupiry": frangocatupiry,
      "Frango-Palmito": frangopalmito,
      "Frango-Calabresa": frangocalabresa,
      "Frango-Bacon": frangobacon,
      "Calabresa-Queijo": calabresaqueijo,
      "Carnesol-Bacon": carnesolbacon,
      "Carnesol-Cheddar": carnesolcheddar,
      "Carnesol-Catupiry": carnesolcatupiry,
      "Banana-Queijo-Canela": bananaqueijocanelap,
      "Banana-Chocolate": bananachocolate,
      "Chocolate-Queijo": chocolatequeijo,
      "Goiabada-Queijo": goiabadaqueijo,
    }

    const Frances = {
      "Pizza": pizzaf,
      "Palmito-Queijo": palmitoqueijof,
      "Frango-Catupiry": frangocatupiryf,
      "Frango-Palmito": frangopalmitof,
      "Frango-Calabresa": frangocalabresaf,
      "Frango-Bacon": frangobaconf,
      "Frango-Cheddar": frangocheddarf,
      "Frango-Azeitona": frangoazeitonaf,
      "Carnesol-Bacon": carnesolbaconf,
      "Carnesol-Queijo": carnesolqueijof,
      "Carnesol-Palmito": carnesolpalmitof,
      "Carnesol-Banana": carnesolbananaf,
      "Carnesol-Azeitona": carnesolazeitonaf,
      "Carnesol-Cheddar": carnesolcheddarf,
      "Carnesol-Catupiry": carnesolcatupiryf,
      "Banana-Queijo-Canela": bananaqueijocanelaf,
      "Banana-Queijo-Chocolate": bananaqueijochocolatef,
      "Goiabada-Queijo": goiabadaqueijof
    }


    const Suico = {

      "Frango-Catupiry": frangocatupiry,
      "Frango-Queijo": frangoqueijo,
      "Frango-Cheddar": frangocheddar,
      "Frango": frango,
      "Presunto-Queijo": presuntoqueijo,
      "Calabresa-Queijo": calabresaqueijo,
      "Carnesol-Queijo": carnesolqueijo,
      "Carnesol": carnesol,
      "Salsicha-Queijo": salsichaqueijos,
      "Chocolate": carne,
      "Queijo": queijo,
      "Carnesol-Cheddar": carnesolcheddar,
      "Carnesol-Catupiry": carnesolcatupiry,
      "Chocolate-Queijo": chocolatequeijo,
      "Goiabada-Queijo": goiabadaqueijo,

    }

    const Bebida ={
      "Laranja": laranja,
      "Maracuja": maracuja,
      "Acerola": acerola,
      "Agua": agua,
      "AguaGas": aguagas,
      "CocaLata": cocalata,
      "FrantaLata": fantalata,
      "GuaranaLata": guaranalata,
      "PepsiLata": pepsilata,
      "CocaLitro": cocalitro,
      "FantaLitro": fantalitro,
      "GuaranaLitro": guaranalitro
    }


function Quantidade(){

const MESAKEY =JSON.parse(localStorage.getItem('Key'))



    const [Valor, setValor] = useState(0)
         
    var item;
    var tip;
    var dado = JSON.parse(localStorage.getItem('Modelo'))

    if(dado === null){
      //
    }else{
      dado['Itens'].forEach((element, index)=> {
          if(element['Item']['Valor'].length === 0 ){
            item = element['Item']['Sabor']
            tip = element['Item']['Tipo']

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
  
                reload['Itens'][index]['Item']['Valor'] = o[0]
                reload['Itens'][index]['Item']['Sabor'] = reload['Itens'][index]['Item']['Sabor'].split("-")
                localStorage.setItem('Modelo', JSON.stringify(reload))
  
              }
            }
          }
        });
        
      }else{
        
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

    var IMAGEM = Pastel

    switch(tip){
      case 'Paslte':
        IMAGEM = Pastel
        break
        case 'Frances':
          IMAGEM = Frances
          break
          case 'Suico':
            IMAGEM = Suico
            break
            case 'Bebida':
              IMAGEM = Bebida
              break
              default:
                break
    }
    
    return (
      <>
        <section className={style.conteiner}>
            <h1>{item}</h1>
            <div className={style.IMg}><img src={IMAGEM[item]} alt='Imagem Pastel'/></div>

            <div className={style.conteiner_Button}>
                
                <div onClick={()=>setValor(Valor + 1)} className={style.But}>+</div>

                <span className={style.Valor}>{Valor}</span>

                <button onClick={() =>{
                    if(Valor > 0){
                        setValor(Valor - 1)
                        }
                    }} className={style.But}>-</button>
        
            </div>

            <div>
                <Link onClick={addValores} to={`/tipo/${MESAKEY[1]['Mesa']}/newitem`}>
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