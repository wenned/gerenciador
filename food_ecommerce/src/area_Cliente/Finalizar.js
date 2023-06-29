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
            setUrl('http://192.168.31.3:8080/input/addnew')
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

                        if(localStorage.getItem('Pedido') === null){
    
                            var deletItem = ['menu_bebidas', 'menu_pasteis', 'menu_frances', 'menu_suicos', 'Modelo']
    
                            for(var Index=0; Index < deletItem.length; Index++){
                                localStorage.removeItem(deletItem[Index])
                            }
                            setTimeout(setvalor('PEDIDO ENVIADO'), 5);
                            localStorage.setItem('Pedido', data.Nu_Pedido)
                            setTimeout(()=>{window.location.href ='/pedido'}, 5)
    
                        }else{
    
                                var Ite = ['menu_bebidas', 'menu_pasteis', 'menu_frances', 'menu_suicos', 'temp', 'Modelo']
    
                                for(var InDex=0; InDex < Ite.length; InDex++){
                                    localStorage.removeItem(Ite[InDex])
                                }
                                setTimeout(setvalor('FALHA AO PRECESSAR PEDIDO'), 20);
    
                                // setTimeout(()=>{window.location.href ='/pedido'}, 30)   
                        }
                    }

                }else{

                    const read = {'Itens':JSON.parse(localStorage.getItem('Modelo')).Itens, 'Id':JSON.parse(localStorage.getItem('Modelo'))._id }
                    console.log(read)
                    const result = await fetch(Url, {
                        method: `${Metodo}`,
                        body:read,
                        headers: {"Content-type": "application/json; charset=UTF-8"}
                    });
                    const responseResult = await result.json();

                    if(result.status === 201){

                        if(localStorage.getItem('Pedido') === null){
    
                            var REMOVE = ['menu_bebidas', 'menu_pasteis', 'menu_frances', 'menu_suicos', 'Modelo']
    
                            for(var REMOV=0; REMOV < REMOVE.length; REMOV++){
                                localStorage.removeItem(REMOVE[REMOV])
                            }
                            setTimeout(setvalor('PEDIDO ENVIADO'), 5);
                            localStorage.setItem('Pedido', responseResult.Nu_Pedido)
                            setTimeout(()=>{window.location.href ='/pedido'}, 5)
    
                        }else{
    
                                var It = ['menu_bebidas', 'menu_pasteis', 'menu_frances', 'menu_suicos', 'temp', 'Modelo']
    
                                for(var Y=0; Y < It.length; Y++){
                                    localStorage.removeItem(It[Y])
                                }
                                setTimeout(setvalor('FALHA AO PRECESSAR PEDIDO'), 20);
    
                                // setTimeout(()=>{window.location.href ='/pedido'}, 30)   
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