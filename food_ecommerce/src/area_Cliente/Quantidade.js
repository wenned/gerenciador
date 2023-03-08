import style from './styles/Quantidade.module.css'
import { Link } from 'react-router-dom';
import pastel from './imagens/pastel.png'
import Logo from '../componentes/Logo'

function Quantidade(){
    
    var item;
    var dado = JSON.parse(localStorage.getItem('Modelo'))

    dado['Itens'].forEach((element, index)=> {
        if(element['Item']['valor'].length === 0 ){
          item = element['Item']['Sabor']

        }
      });

      function LimpaDados(){localStorage.clear()}

    return (

        <section className={style.conteiner}>
            <h1>{item}</h1>
            <div className={style.IMg}><img src={pastel} alt='Imagem Pastel'/></div>

            <div className={style.conteiner_Button}><button className={style.But}><span>-</span></button><span className={style.Valor}>1</span><button className={style.But}><span>+</span></button></div>

    
            <div>
                <Link to='/tipo'>
                    <div className={style.Novo}><span className={style.texto}>Novo Item</span></div>
                </Link>
            </div>

            <div>
                <Link to='/'>
                    <div onClick={LimpaDados} className={style.New}><span className={style.texto}>Finalizar</span></div>
                </Link>
            </div>
            <Logo/>
        </section>

    )
};

export default Quantidade;