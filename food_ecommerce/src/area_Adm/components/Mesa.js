import style from './Mesa.module.css'

function Mesa(){

    return (
        <section className={style.conteiner}>

               <div className={style.estilo}><span>MESA 1
                  <a href='/tipo' >Pedido</a>
                  <a href='/tipo' >Fechar</a>
                  <a href='/tipo' >Emitir Cumpon</a>
                </span></div>

                 
        </section>
    )
};

export default Mesa;