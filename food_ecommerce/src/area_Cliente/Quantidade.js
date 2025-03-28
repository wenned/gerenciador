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

  const [displayoff, setdisplayoff] = useState('Butao')
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
    var idModelo = JSON.parse(localStorage.getItem('id')) 

    if(dado === null){

      idModelo.item.forEach((element)=> {
        if(element.Item.Valor === 0 ){
          item = element.Item.Sabor
          tip = element.Item.Tipo
        }
      });
    }else{
      dado.Itens.forEach((element)=> {
          if(element.Item.Valor === 0 ){
            item = element.Item.Sabor
            tip = element.Item.Tipo
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

          <img className={style.itemImagem} src={IMAGEM[item]} alt='Imagem Pastel'/>
        
          <h1 className={style.nomes}>{item}</h1>

          <div className={style.conteinerAcao}>
            <span className={style.preco}>${valor_item.toFixed(2)}</span>

            <span className={style.buttonQuantidade}>

              <button onClick={()=>{setValor(Valor + 1); setvalor_item(Valor_Atual + valor_item)}} className={style.But}>+</button>

              <span className={style.qnt}>{Valor}</span>

              <button onClick={() =>{ if(Valor > 0){setValor(Valor - 1)}; setvalor_item(valor_item - Valor_Atual)}} className={style.But}>-</button>

            </span>

          </div>
          
          <div className={style.descricao}>
            <span>Igredientes :</span>
            <span>Massa pastel, Carne, Queijo</span>
          </div> {/*area de teste*/}

          <div className={style.conteinerButton}>


            <div className={style[`${displayoff}`]} 
                onClick={()=>{setdisplayoff('displayon'); setativado('adicioactive_on'); setnome('nome_act')}}>
              
              <span className={style[`${nome}`]}>ADICIONAL</span>
              
              <span className={style[`${ativado}`]}>

                {
                  Object.values(Item).map((mesa, index)=>(

                    <label key={index} className={isChecked[index]? style.Input_check : style.bntadicional}>
                      
                      {mesa.toLocaleUpperCase()}

                      <input id={index} className={style.Input} 
                        type='checkbox'
                        checked={isChecked[index]}
                          onChange={() => {
                            setdisplayoff('Butao');
                              setativado('ativado');
                                setnome('nome_off');
                                  handleCheckboxChange(index);
                                    adicionar_adicional(`${mesa}`)
                        }}/>
                      </label>
                  ))
                }

              </span>
            </div>

            <Link className={style.Butao} onClick={()=>{addValores(Number(valores), Valor)}} to={`/tipo/${MESAKEY[1]['Mesa']}/novoItem`}>
                ADICIONAR NOVO ITEM
            </Link>

            <Link to='/finalizar' onClick={()=>{ addValores( Number(valores), Valor)}} className={style.Butao}>
                FINALIZAR
            </Link>
          </div>

      </section>
    )
};

export default Quantidade;