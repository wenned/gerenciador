import { useEffect, useRef, useState } from 'react';
import style from './Styles/Conferencia.module.css'

async function verificarCaixa(...args){
    console.log(args)
}

function Conferencia(){

    const [caixas, setCaixas] = useState('')
    const [result, setResult] = useState('')

    const [nome, setNome] = useState('')
    const nomeRef = useRef(null)

    const handleChanger = (e)=>{
        setNome(e.target.value)
    };


    useEffect(()=>{

        async function carregaCaixas(){
            const resposta = await fetch(`http://192.168.31.3:8080/caixas`);
            // const resposta = await fetch(`http://192.168.3.52:8080/pedidos`);
            // const resposta = await fetch(`http://192.168.2.9:8080/pedidos`);
            const Caixas = await resposta.json();
            setCaixas(Caixas)
        }

        carregaCaixas()

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
        <>
        <section className={style.conteiner}>
            <div className={style.conte}>
                <div className={style.cf}>Caixas Fechado</div>
                <div className={style.caixasAb}>
                    {
                        Object.values(caixas).map((caixa, index)=>(
                            <div onClick={()=>{Dados(caixa['_id'])}} key={index} className={style.bott} >{caixa['Nome']} / {caixa['Data']}</div>
                        ))
                    }
                </div>
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
                    <input onChange={handleChanger} ref={nomeRef} type='text'className={style.bTn}></input>
                    <button onClick={()=>{verificarCaixa(nome, result['_id']);redefinir()}} className={style.bTn}>Finalizar</button>
                </div>
            </div>
        </section>
        </>
    );
};

export default Conferencia;