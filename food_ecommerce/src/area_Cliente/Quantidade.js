import style from './styles/Quantidade.module.css'
import { Link } from 'react-router-dom';
import pastel from './imagens/pastel.png'
import Logo from '../componentes/Logo'
import { useState } from 'react';

function Quantidade(){

    const [Valor, setValor] = useState(0)
         
    var item;
    var dado = JSON.parse(localStorage.getItem('Modelo'))

    dado['Itens'].forEach((element, index)=> {
        if(element['Item']['Valor'].length === 0 ){
          item = element['Item']['Sabor']

        }
      });

      function LimpaDados(){
        localStorage.clear();
    }

      function addQuantidade(){

        var reload;      
        reload = dado


        reload['Itens'].forEach((element, index)=> {
          if(element['Item']['Valor'].length === 0){
            reload['Itens'][index]['Item']['Quantidade'] = Valor

            var h = JSON.parse(localStorage.getItem('menu_pasteis'))
            
            for (var i=0; i < h.length; i++){
              console.log(h[i][i])
            }

            // reload['Itens'][index]['Item']['Valor'] = 
            localStorage.setItem('Modelo', JSON.stringify(reload))
          }
        });

      }

    return (

        <section className={style.conteiner}>
            <h1>{item}</h1>
            <div className={style.IMg}><img src={pastel} alt='Imagem Pastel'/></div>

            <div className={style.conteiner_Button}>

                <button onClick={() =>{
                    if(Valor > 0){
                        setValor(Valor - 1)
                        }
                    }} className={style.But}><span>-</span></button>

                <span className={style.Valor}>{Valor}</span>

                <button onClick={()=>setValor(Valor + 1)} className={style.But}><span>+</span></button>
        
            </div>

            <div>
                <Link onClick={addQuantidade} to='/tipo'>
                    <div className={style.Novo}><span className={style.texto}>Novo Item</span></div>
                </Link>
            </div>

            <div>
                <Link to='/finalizar'>
                    <div onClick={()=>{ addQuantidade(); LimpaDados()}} className={style.New}><span className={style.texto}>Finalizar</span></div>
                </Link>
            </div>
            <Logo/>
        </section>

    )
};

export default Quantidade;