import Logo from "../componentes/Logo";
import style from './styles/Finalizar.module.css'

function Finalizar(){

    return(
        <section>
        <div className={style.container}><span className={style.texto}>Processando peido...</span></div>
        <div className={style.cont}>
            <Logo/>
        </div>
        </section>
    )
};

export default Finalizar;