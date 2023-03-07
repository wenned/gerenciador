import Logo from '../componentes/Logo';
import style from './styles/Tipo.module.css'
import { Link } from 'react-router-dom';

function Tipo(){
    
    return (
        <>
        <section className={style.conteiner}>

                <Link to='/pastel'>
                    <div id='pastel' className={style.bodY}><span className={style.texto}>PASTEIS</span></div>
                </Link>
                
                <Link to='/frances'>
                    <div id='frances' className={style.bodY}><span className={style.texto}>CREPE FRANCES</span></div>
                </Link>

                <Link to='/suico'>
                    <div id='suico' className={style.bodY}><span className={style.texto}>CREPE SUICO</span></div>
                </Link>

                <Link to='/hamburgue'>
                    <div id='hamburgue' className={style.bodY}><span className={style.texto}>HAMBURGUE</span></div>
                </Link>

                <Link to='/bebida'>
                    <div id='bebida' className={style.bodY}><span className={style.texto}>BEBIDAS</span></div>
                </Link>

                <Logo/>

        </section>

        </>
    )
}

export default Tipo;