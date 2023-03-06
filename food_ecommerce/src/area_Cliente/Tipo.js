import Logo from '../componentes/Logo';
import style from './Tipo.module.css'

function Tipo(){
    
    return (
        <>
        <section className={style.conteiner}>

            <div className={style.bodY}><span className={style.texto}>PASTEIS</span></div>

            <div className={style.bodY}><span className={style.texto}>CREPE FRANCES</span></div>

            <div className={style.bodY}><span className={style.texto}>CREPE SUICO</span></div>

            <div className={style.bodY}><span className={style.texto}>HAMBURGUE</span></div>

            <div className={style.bodY}><span className={style.texto}>BEBIDAS</span></div>
        <Logo/>
        </section>

        </>
    )
}

export default Tipo;