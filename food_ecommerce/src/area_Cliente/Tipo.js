import Logo from '../componentes/Logo';
import style from './styles/Tipo.module.css'
import { Link } from 'react-router-dom';

function Tipo(){
    
    return (
        <>
        <section className={style.conteiner}>

                <Link to='/pastel?valor=pastel'>
                    <div id='pastel' className={style.bodY}><span className={style.texto}>PASTEIS</span></div>
                </Link>
                <div id='frances' className={style.bodY}><span className={style.texto}>CREPE FRANCES</span></div>
                <div id='suico' className={style.bodY}><span className={style.texto}>CREPE SUICO</span></div>
                <div id='hamburgue' className={style.bodY}><span className={style.texto}>HAMBURGUE</span></div>
                <div id='bebida' className={style.bodY}><span className={style.texto}>BEBIDAS</span></div>
                        <Logo/>

        </section>

        </>
    )
}

export default Tipo;