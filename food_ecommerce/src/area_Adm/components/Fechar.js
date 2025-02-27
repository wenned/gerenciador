import {useEffect, useRef, useState } from 'react';
import style from './Styles/Fechar.module.css'
import Logo from '../../componentes/Logo'

import { fecharCaixa } from '../Funcionalidades_adm/fecharCaixa';

function Fechar(){
    
    const [DADOS_RETORNO, setDADOS_RETORNO] = useState(new Date().toISOString().slice(0,10))
    const [valores, setvalores] = useState(0)
    
    const [date, setDate] = useState('')
    const [cache, setCache] = useState('')
    const [card, setCard] = useState('')
    const [pix, setPix] = useState('')
    const [nome , setNome] = useState('')


    const dateInputRef = useRef(null)
    const cacheInputRef = useRef(null)
    const cardInputRef = useRef(null)
    const pixInputRef = useRef(null)
    const nomeInputRef = useRef(null)

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
                            case 'nome':
                                setNome(e.target.value)
                                break
                                default:
                                    break

        }
    };


    useEffect(()=>{

        async function Pedidos(){
            const RespostaKEY = await fetch(`http://192.168.31.3:8080/pedidosFeito`)
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
  
        <section className={style.conteiner} >
            <div className={style.pedidos}>

            {DADOS_RETORNO.length > 0? Object.values(DADOS_RETORNO).map((ValorElemento, i)=> (
            
            <div key={i} className={style.PedidosFechamento}>{ValorElemento.Nu_Pedido}</div>
            
            )): <span className={style.conteinerlogo}><Logo/> </span>}
                
            </div>

            <span className={style.line}></span>

            <div className={style.lancamento}>
                
                <div className={style.cabecario}>Lancamento de Entradas</div>

                <form className={style.formulario}>

                    <input id='date' type='date' onChange={handleChanger} ref={dateInputRef} className={style.butt}></input>

                    <input id='cache' onChange={handleChanger} ref={cacheInputRef} className={style.butt} placeholder='Dinheiro'></input>
                    <input id='card' onChange={handleChanger} ref={cardInputRef} className={style.butt} placeholder='Cartao'></input>
                    <input id='pix' onChange={handleChanger} ref={pixInputRef} className={style.butt} placeholder='Pix'></input>
                    
                    <input id='nome' onChange={handleChanger} ref={nomeInputRef} placeholder='Digite seu nome' className={style.butt}></input>
                    
                    <button type='button' className={style.butt} onClick={()=>fecharCaixa(DADOS_RETORNO, date, Valor, nome, SALDO_TOTAL_DIA)}>Fechar Caixa</button>


                </form>

                <div className={style.saldo}>
                    <div>Total Lancamento: R$ {Valor}</div>
                    <div>Saldo Total: R$ {SALDO_TOTAL_DIA.toFixed(2)}</div>
                </div>
           
            </div>
                    
        
        </section>

    )
}

export default Fechar;