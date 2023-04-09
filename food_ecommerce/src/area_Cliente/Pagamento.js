import style from './styles/Pagamento.module.css'
import Logo from '../componentes/Logo';
import { useParams } from 'react-router-dom';


function Pagamento(){

    const {valor} = useParams();

    return(
        <>
        <section className={style.conteiner}>
            <div className={style.valOr}>Valor Total</div>
            <div className={style.valOr}>{valor}</div>
        </section>

        <div className={style.Npedido}>
            Agradecemos a preferencia, em instantes nosso colaborador vira a sua mesa.
            <Logo/>
        </div>
     </>
    )
}

export default Pagamento;