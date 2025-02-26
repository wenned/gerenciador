import style from './Styles/Producao.module.css'
import { Link } from 'react-router-dom';

function Producao(){

    return(
        <>
        <section className={style.conteiner}>
            <span>
                <Link to='/pasteis'>
                    <div className={style.bnt}><div className={style.vl}>PEDIDOS</div></div>
                </Link>
            </span>

            <span>
                <Link to='/conferencia'>
                    <div className={style.bnt}><div className={style.vl}>CONFERENCIA</div></div>
                </Link>
            </span>

            <span>
                <Link to='/pasteis'>
                    <div className={style.bnt}><div className={style.vl}>?</div></div>
                </Link>
            </span>

            <span>
                <Link to='/pasteis'>
                    <div className={style.bnt}><div className={style.vl}>?</div></div>
                </Link>
            </span>

        </section>
        </>
    )
}

export default Producao;