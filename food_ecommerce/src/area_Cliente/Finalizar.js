import { useEffect, useState } from "react";
import Logo from "../componentes/Logo";
import style from './styles/Finalizar.module.css'

function Finalizar(){

    const [valor, setvalor] = useState('Processando peido...');

    function LimpaDados(){
        localStorage.clear();
    }

    useEffect(()=>{
        async function sendDados(){

            fetch('http://192.168.31.3:8080/inserir', {
            method: "POST",
            body: localStorage.getItem('Modelo'),
            headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => {
                return response}) 
            .then(jsonB => {

                if(jsonB.status === 200){
                    setvalor('PEDIDO ENVIADO')
                    setTimeout(LimpaDados(), 5)
                }
            
            })
            .catch(err => console.log(err));

        };

        sendDados();

    })

    return(
        <section>
        <div className={style.container}><span className={style.texto}>{valor}</span></div>
        <div className={style.cont}>
            <Logo/>
        </div>
        </section>
    )
};

export default Finalizar;