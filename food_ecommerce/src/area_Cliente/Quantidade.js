import style from './styles/Quantidade.module.css'
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

// FUNCIONALIDADES

import {adicionar_adicional} from './Funcionalidades/adicional'
import { addValores } from './Funcionalidades/adicionarValores';
import { Pastel, Frances, Suico, Bebida } from './Funcionalidades/imagensItens';

const Item = ['Queijo','Cheddar','Catupiry','Chocolate','Carne','Carnesol','Bacon','Frango','Azeitona','Goiabada','Palmito','Calabresa','Presunto','Canela',]

function Quantidade(){

  const {valores} = useParams()
  var Valor_Atual =  Number(valores)

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

    });
  };

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
    };
    
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

            <button onClick={()=>{setValor(Valor + 1); setvalor_item(Valor_Atual + valor_item)}} className={style.But}>+</button>

            <span className={style.Valor}>{Valor}</span>

            <button onClick={() =>{ if(Valor > 0){setValor(Valor - 1)}; setvalor_item(valor_item - Valor_Atual)}} className={style.But}>-</button>

          </div>

          <div className={style.preco}>${valor_item.toFixed(2)}</div>

          <div className={style.adicionarNovo}>

              <Link onClick={()=>{addValores(Number(valores), Valor)}} to={`/tipo/${MESAKEY[1]['Mesa']}/novoItem`}>
                  <div className={style.Butao}>Adicionar Novo Item</div>
              </Link>

          </div>

          <div className={style.final}>

              <Link to='/finalizar'>
                  <div onClick={()=>{ addValores( Number(valores), Valor)}} className={style.Butao}>Finalizar</div>
              </Link>
              
          </div>

      </section>
    )
};

export default Quantidade;