import style from './Styles/Producao.module.css'
import { Link } from 'react-router-dom';

function Producao(){

    return(
        <>
        <section className={style.conteiner}>
            <Link to='/pasteis'>
                <div className={style.bnt}><div className={style.vl}>VISAO GERAL</div></div>
            </Link>
            <Link to='/pasteis'>
                <div className={style.bnt}><div className={style.vl}>PASTEIS</div></div>
            </Link>
            <Link to='/pasteis'>
                <div className={style.bnt}><div className={style.vl}>CREPRE FRANCES</div></div>
            </Link>
            <Link to='/pasteis'>
                <div className={style.bnt}><div className={style.vl}>CREPRE SUICO</div></div>
            </Link>
            <Link to='/pasteis'>
                <div className={style.bnt}><div className={style.vl}>HAMBURGES</div></div>
            </Link>
            <Link to='/pasteis'>
                <div className={style.bnt}><div className={style.vl}>BEBIDAS</div></div>
            </Link>
        </section>
        </>
    )
}

export default Producao;