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
            // setUrl('http://192.168.3.52:8080/inserir')

            setUrl('http://192.168.31.3:8080/inserir')
            // setUrl('http://192.168.2.9:8080/inserir')
            setMetodo('POST')
        }else{
            var s = localStorage.getItem('Pedido')
            if(s.length > 2){
                // setUrl('http://192.168.3.52:8080/input/addnew')

                setUrl('http://192.168.31.3:8080/input/addnew')
                // setUrl('http://192.168.2.9:8080/input/addnew')
                setMetodo('PUT')
            }
        }
    
        async function sendDados(){
            try {
                const response = await fetch(Url, {
                    method: `${Metodo}`,
                    body: localStorage.getItem('Modelo'),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                });
                
                const data = await response.json();


                if(response.status === 200){

                    if(data['Status'] === true && localStorage.getItem('Pedido') === null){

                        var REMOVE = ['menu_bebidas', 'menu_pasteis', 'menu_frances', 'menu_suicos', 'Modelo']

                        for(var REMOV=0; REMOV < REMOVE.length; REMOV++){
                            localStorage.removeItem(REMOVE[REMOV])
                        }
                        setTimeout(setvalor('PEDIDO ENVIADO'), 5);
                        localStorage.setItem('Pedido', data['Pedido'])
                        setTimeout(()=>{window.location.href ='/pedido'}, 5)

                    }else{

                        if(data === true){

                            var items = ['menu_bebidas', 'menu_pasteis', 'menu_frances', 'menu_suicos', 'temp', 'Modelo']

                            for(var y=0; y < items.length; y++){
                                localStorage.removeItem(items[y])
                            }

                            setTimeout(setvalor('PEDIDO ENVIADO'), 5);
                            setTimeout(()=>{window.location.href ='/pedido'}, 5)
                            
                        }else{
                            var It = ['menu_bebidas', 'menu_pasteis', 'menu_frances', 'menu_suicos', 'temp', 'Modelo']

                            for(var Y=0; Y < It.length; Y++){
                                localStorage.removeItem(It[Y])
                            }
                            setTimeout(setvalor('FALHA AO PRECESSAR PEDIDO'), 20);

                            setTimeout(()=>{window.location.href ='/pedido'}, 30)

                        }
                        
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