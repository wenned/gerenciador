import style from './styles/Quantidade.module.css'
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

// FUNCIONALIDADES

import {adicionar_adicional} from './Funcionalidades/adicional'

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

var adicionais = []

const Item = ['Queijo','Cheddar','Catupiry','Chocolate','Carne','Carnesol','Bacon','Frango','Azeitona','Goiabada','Palmito','Calabresa','Presunto','Canela',]

function Quantidade(){

  const {valores} = useParams()
  var g =  Number(valores)

  const [displayoff, setdisplayoff] = useState('displayoff')
  const [imgoff, setimgoff] = useState('imgoff')
  const [ativado, setativado] = useState('ativado')
  const [nome, setnome] = useState('nome_off')

  const [isChecked, setIsChecked] = useState(Array(Object.values(Item).length).fill(false));
  
  const handleCheckboxChange = (index) => {
    


    setIsChecked((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];

      const checkedCount = newState.filter((isChecked) => isChecked).length;
      if (checkedCount > 2) {
        newState[index] = false; // Desmarcar o checkbox atual se exceder o limite
      }
      return newState;
    })

    }

    const MESAKEY =JSON.parse(localStorage.getItem('Key'))

    const [Valor, setValor] = useState(0)
    const [valor_item, setvalor_item] = useState(0)
    
    var item;
    var tip;
    var dado = JSON.parse(localStorage.getItem('Modelo'))

    if(dado === null){
      //
    }else{
      
      dado['Itens'].forEach((element)=> {
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
            reload['Itens'][index]['Item']['Adicional'] = adicionais

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
              var valorItem = Object.values(h[item][element['Item']['Sabor']])
  
                reload['Itens'][index]['Item']['Valor'] = valorItem[0]
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
            reload['Itens'][index]['Item']['Adicional'].push(adicionais)
            
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
        <section className={style.conteiner}>
        
          <h1 className={style.nomes}>{item}</h1>

          <img className={style[`${imgoff}`]} src={IMAGEM[item]} alt='Imagem Pastel'/>

          <div className={style[`${displayoff}`]} onClick={()=>{setdisplayoff('displayon'); setimgoff('imgon'); setativado('adicioactive_on'); setnome('nome_act')}}>
            <div className={style[`${nome}`]}>Adicional</div>
            <div className={style[`${ativado}`]}>
              {
                Object.values(Item).map((mesa, index)=>(
                  <label key={index} className={isChecked[index]? style.Input_check : style.bntadicional}>
                    {mesa}
                    <input id={index} className={style.Input} 
                      type='checkbox'
                      checked={isChecked[index]}
                      onChange={() => {
                        setdisplayoff('displayoff');
                        setimgoff('imgoff');
                        setativado('ativado');
                        setnome('nome_off');
                        handleCheckboxChange(index);
                        adicionar_adicional(`${mesa}`)
                      }}/>
                    </label>
                ))
              }
            </div>
          </div>

          <div className={style.conteiner_Button}>

            <button onClick={()=>{setValor(Valor + 1); setvalor_item(g + valor_item)}} className={style.But}>+</button>
            <span className={style.Valor}>{Valor}</span>
            <button onClick={() =>{ if(Valor > 0){setValor(Valor - 1)}; setvalor_item(valor_item - g)}} className={style.But}>-</button>

          </div>

          <div className={style.preco}>${valor_item.toFixed(2)}</div>

          <div className={style.adicionarNovo}>
              <Link onClick={addValores} to={`/tipo/${MESAKEY[1]['Mesa']}/newitem`}>
                  <div className={style.Butao}>Adicionar Novo Item</div>
              </Link>
          </div>

          <div className={style.final}>
              <Link to='/finalizar'>
                  <div onClick={()=>{ addValores()}} className={style.Butao}>Finalizar</div>
              </Link>
          </div>

      </section>
    )
};

export default Quantidade;