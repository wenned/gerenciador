import { useEffect, useRef, useState } from 'react';
import style from './Styles/Conferencia.module.css'

import { verificarCaixa ,carregaCaixas} from '../Funcionalidades_adm/fecharCaixa';

function Conferencia(){

    const [caixas, setCaixas] = useState('')
    const [result, setResult] = useState('')

    const [nome, setNome] = useState('')
    const nomeRef = useRef(null)

    const handleChanger = (e)=>{
        setNome(e.target.value)
    };

    useEffect(()=>{
        carregaCaixas().then((dados)=>{setCaixas(dados)})
    },[])
    
    function Dados(...args){

        for(var CX = 0; CX < caixas.length; CX++){
            if(caixas[CX]['_id'] === args[0]){
                setResult(caixas[CX])
            }
        }
    }

    function redefinir(){
        
        setTimeout(()=>{setResult('')}, 15)
    }

    return (

        <section className={style.conteiner}>
            <div className={style.conteinerBox}>
                <span className={style.cf}>Caixas Fechado</span>
                <span className={style.conteinerCaixas}>
                    {
                        Object.values(caixas).map((caixa, index)=>(
                            <span onClick={()=>{Dados(caixa['_id'])}} key={index} className={style.bott} >
                                    {caixa['Nome']} / {caixa['Data']}</span>
                        ))
                    }
                </span>
            </div>

            <span className={style.line}></span>
            
            <div className={style.conTeiner}>
                
                <div className={style.Btn}>
                    <label className={style.btn}>Nome : {result.Nome}</label>
                    <label className={style.btn}>Data : {result.Data}</label>
                    <label className={style.btn}>Valor Total : {result.Valor_Total}</label>
                    <label className={style.btn}>Valor Lancado : {result.Valor_Lancamento}</label>
                </div>

                <div className={style.Conf}>
                    <label className={style.nome}>Nome:</label>
                    <input onChange={handleChanger} ref={nomeRef} type='text'className={style.bTnLabel}></input>
                    <button onClick={()=>{
                        verificarCaixa(nome.toLocaleUpperCase(), result['Id']);redefinir()}} className={style.bTn}>Finalizar</button>
                </div>
            </div>
        </section>
   
    );
};

export default Conferencia;