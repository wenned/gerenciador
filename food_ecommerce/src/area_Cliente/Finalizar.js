import { useEffect, useState } from "react";
import Logo from "../componentes/Logo";
import style from './styles/Finalizar.module.css';
import debounce from 'lodash/debounce';

function Finalizar(){

    const [valor, setvalor] = useState('Processando pedido...');

    useEffect(()=>{
        async function sendDados(){
            try {
                const response = await fetch('http://192.168.31.3:8080/inserir', {
                    method: "POST",
                    body: localStorage.getItem('Modelo'),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                });
                if(response.status === 200){

                    const data = await response.json();
                    if(data['Status'] === true){
                        localStorage.clear();
                        setTimeout(setvalor('PEDIDO ENVIADO'), 5);
                        localStorage.setItem('Pedido', data['Pedido'])
                        setTimeout(()=>{window.location.href ='/pedido'}, 5)
                    }else{
                        setTimeout(setvalor('FALHA AO PRECESSAR PEDIDO'), 20);
                    }
                    
                }
            } catch (error) {
                console.log(error);
            }
        }

        const debouncedSendDados = debounce(sendDados, 500);

        debouncedSendDados();

        return () => {
            debouncedSendDados.cancel();
        }

    },[]);

    return(
        <section>
            <div className={style.container}><span className={style.texto}>{valor}</span></div>
            <div className={style.cont}>
                <Logo/>
            </div>
        </section>
    );
};

export default Finalizar;