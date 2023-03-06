import style from './styles/MenuH.module.css'

function Tipo(){
    
    return (
        <>
        <section className={style.conteiner}>

            <div id="mesa" className={style.bodY}><span className={style.texto}>MESAS</span></div>

            <div id="producao" className={style.bodY}><span className={style.texto}>PRODUCAO</span></div>

            <div id="fechar" className={style.bodY}><span className={style.texto}>FECHAR CAIXA</span></div>

        </section>

        </>
    )
}

export default Tipo;