import { useEffect, useState } from "react";
import Logo from "../componentes/Logo";
import style from './styles/Finalizar.module.css';
import debounce from 'lodash/debounce';

function Finalizar(){

    const [valor, setvalor] = useState('Processando pedido...');

    const [Url, setUrl] = useState('')
    const [Metodo, setMetodo] = useState('')

    useEffect(()=>{

        if(localStorage.getItem('Pedido') === null){
            setUrl('http://192.168.31.3:8080/inserir')
            setMetodo('POST')
        }else{
            setUrl(`http://192.168.31.3:8080/entrada/inserirItemPedido`)
            setMetodo('PUT')
        }
    
        async function sendDados(){

            try {
                
                if(localStorage.getItem('Pedido') === null){
                    const response = await fetch(Url, {
                        method: `${Metodo}`,
                        body: localStorage.getItem('Modelo'),
                        headers: {"Content-type": "application/json; charset=UTF-8"}
                    });
                    const data = await response.json();
                    if(response.status === 201){


    
                            var deletItem = ['menu_bebidas', 'menu_pasteis', 'menu_frances', 'menu_suicos', 'Modelo']
    
                            for(var Index=0; Index < deletItem.length; Index++){
                                localStorage.removeItem(deletItem[Index])
                            }
                            setTimeout(setvalor('PEDIDO ENVIADO'), 5);
                            localStorage.setItem('Pedido', data.Nu_Pedido)
                            setTimeout(()=>{window.location.href ='/pedido'}, 5)
    

                    }

                }else{

                    const read = JSON.parse(localStorage.getItem('id'))

                    const result = await fetch(Url, {
                        method: `${Metodo}`,
                        body:JSON.stringify(read),
                        headers: {"Content-type": "application/json; charset=UTF-8"}
                    });
                    await result.json();

                    if(result.status === 201){

    
    
                            var REMOVE = ['menu_bebidas', 'menu_pasteis', 'menu_frances', 'menu_suicos', 'Modelo', 'id']
    
                            for(var REMOV=0; REMOV < REMOVE.length; REMOV++){
                                localStorage.removeItem(REMOVE[REMOV])
                            }
                            setTimeout(setvalor('PEDIDO ENVIADO'), 5);
                            setTimeout(()=>{window.location.href ='/pedido'}, 5)

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

    },[Metodo, Url]);

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
