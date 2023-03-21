import style from './Styles/Producao.module.css'
import { Link } from 'react-router-dom';

function Producao(){

    return(
        <>
        <section className={style.conteiner}>
            <Link to='/pasteis'>
                <div className={style.bnt}><span className={style.vl}>VISAO GERAL</span></div>
            </Link>
            <Link to='/pasteis'>
                <div className={style.bnt}><span className={style.vl}>PASTEIS</span></div>
            </Link>
            <Link to='/pasteis'>
                <div className={style.bnt}><span className={style.vl}>CREPRE FRANCES</span></div>
            </Link>
            <Link to='/pasteis'>
                <div className={style.bnt}><span className={style.vl}>CREPRE SUICO</span></div>
            </Link>
            <Link to='/pasteis'>
                <div className={style.bnt}><span className={style.vl}>HAMBURGES</span></div>
            </Link>
            <Link to='/pasteis'>
                <div className={style.bnt}><span className={style.vl}>BEBIDAS</span></div>
            </Link>
        </section>
        </>
    )
}

export default Producao;