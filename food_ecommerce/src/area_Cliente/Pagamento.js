import style from './styles/Pagamento.module.css'
import Logo from '../componentes/Logo';
import { useParams } from 'react-router-dom';

import {fetchPedido} from './Funcionalidades/buscarPedido'
import { useCallback, useState } from 'react';


function Pagamento(){

    const {valor} = useParams();
    const [Valor, setValor] = useState('')
    
    const fn = useCallback(()=>{
        fetchPedido(valor)
            .then((doc)=>{
                setValor(doc.valor_total)
        })
        },[valor])
    fn()

    return(
        <>
        <section className={style.conteiner}>
            <div className={style.valOr}>Valor Total</div>
            <div className={style.valOr}>{Valor}</div>
        </section>

        <div className={style.Npedido}>
            Agradecemos a preferencia, em instantes nosso colaborador vira a sua mesa.
            <Logo/>
        </div>
     </>
    )
}

export default Pagamento;