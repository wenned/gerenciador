import {useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Styles/Fechar.module.css'
import Logo from '../../componentes/Logo'

function Fechar(){
    
    const [DADOS_RETORNO, setDADOS_RETORNO] = useState(new Date().toISOString().slice(0,10))
    const [valores, setvalores] = useState(0)

    const [date, setDate] = useState('')
    const [cache, setCache] = useState('')
    const [card, setCard] = useState('')
    const [pix, setPix] = useState('')


    const dateInputRef = useRef(null)
    const cacheInputRef = useRef(null)
    const cardInputRef = useRef(null)
    const pixInputRef = useRef(null)

    const Valor = cache+card+pix

    const handleChanger = (e)=>{
        
        switch(e.target.id){
            
            case 'cache':
                setCache(Number(e.target.value))
                break
                case 'card':
                    setCard(Number(e.target.value))
                    break
                    case 'pix':
                        setPix(Number(e.target.value))
                        break
                        case 'date':
                            setDate(e.target.value)
                            break
                            default:
                                break

        }
    };


    useEffect(()=>{

        async function Pedidos(){
            const RespostaKEY = await fetch(`http://192.168.31.3:8080/fechamento/${date}`)
            const ResultKey = await RespostaKEY.json()
            setDADOS_RETORNO(ResultKey)
            setvalores(ResultKey)
        }
        Pedidos()

    },[date])

    var SALDO_TOTAL_DIA = 0

    if(valores.length !== 0){
        Object.values(valores).map((valor)=>{
            SALDO_TOTAL_DIA = parseFloat(valor.valor_total) + SALDO_TOTAL_DIA
            return null
        })       
    }

    return(
        <>
        <section className={style.conteiner} >
            <div className={style.pedidos}>

            {DADOS_RETORNO.length > 0? Object.values(DADOS_RETORNO).map((ValorElemento, i)=> (
            <Link  key={i}>
              <div className={style.PedidosFechamento}>{ValorElemento.Nu_Pedido}</div>
            </Link>
            
            )): <Logo/> }
                
            </div>

            <span className={style.line}></span>
            <div className={style.lancamento}>

                <form action="/?">
                    <div className={style.cabecario}>Lancamento de Entradas</div>

                    <input id='date' type='date' onChange={handleChanger} ref={dateInputRef} className={style.butt}></input>

                    <input id='cache' onChange={handleChanger} ref={cacheInputRef} className={style.butt} placeholder='Dinheiro'></input>
                    <input id='card' onChange={handleChanger} ref={cardInputRef} className={style.butt} placeholder='Cartao'></input>
                    <input id='pix' onChange={handleChanger} ref={pixInputRef} className={style.butt} placeholder='Pix'></input>
                    <button type='submit' className={style.butt} >Fechar Caixa</button>

                    <div className={style.saldoTotal}>Saldo Total: R$ {SALDO_TOTAL_DIA.toFixed(2)}</div>
                    <div className={style.saldo}>Total Lancamento: R$ {Valor}</div>
                    
                    <input placeholder='Digite seu nome' className={style.butt}></input>


                </form>
            
            </div>
        
        </section>
        </>
    )
}

export default Fechar;