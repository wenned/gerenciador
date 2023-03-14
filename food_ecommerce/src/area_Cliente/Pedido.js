import style from './styles/Pedido.module.css'
import { Link } from 'react-router-dom';
import Logo from '../componentes/Logo';

function Pedido(){

    return(
        <>
        <section className={style.conteiner}>
        <div className={style.c}>
            
            <Link to='/tipo'>
                <div id='pastel' className={style.bodY}><span className={style.texto}>ADICIONAR NOVO ITEM</span></div>
            </Link>
        </div>

        <div>
            <Link to='/tipo'>
                <div id='pastel' className={style.bod}><span className={style.texto}>PAGAR</span></div>
            </Link>
        </div>

        <Logo/>

        </section> 
        </>
    )

};

export default Pedido;