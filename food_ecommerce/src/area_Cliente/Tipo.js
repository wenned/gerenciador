import Logo from '../componentes/Logo';
import style from './styles/Tipo.module.css'
import { Link, useParams} from 'react-router-dom';

// Funcionalidades
import {adicionarTipo} from './Funcionalidades/adicionarQuantidade.js';
import {carga, libera, validar} from './Funcionalidades/verificacaoKeys'
import { useState } from 'react';
import { removerItensArmazenado } from './Funcionalidades/remocaoItensLocal';
import { pegarPedido, verificarPropriedadesPedido } from './Funcionalidades/verificacaoPedido';

function Tipo(){
    
    const {Operacao ,Mesa} = useParams();
    const [controle, setControle] = useState(0);

    try {

        if(Operacao === 'novoItem'){

            verificarPropriedadesPedido()
            
            if(localStorage.getItem('Pedido') !== null && localStorage.getItem('id') === null){
                pegarPedido()
                carga()
            }else{
                pegarPedido()
            }
        }else{

            validar(Mesa)
            .then((resp)=>{
                if(resp.Estado === 0){
                    libera(Mesa)
                        .then((retor)=>{
                            if(retor === true){
                                carga()
                            }
                        })
                }
            
                if(resp.Estado === 1) {
                    
                    if(localStorage.getItem('Key') === null){
                        setControle(1)
                    } else {
                        const key  = JSON.parse(localStorage.getItem('Key'))
                        if ( key[0] === resp.Chave){
                            setControle(0)
                        } else {
                            setControle(1)
                            removerItensArmazenado()
                        }
                    }
                }

                if(resp === 2){
                    carga()
                    localStorage.removeItem('Modelo')
                }
            })            
        }

    } catch (error) {
        console.log(error)
    }
    
    return (
        <>
        {controle === 0?
        <section className={style.conteiner}>
                

                <Link id='pasteis' className={style.button} onClick={()=>{adicionarTipo('Pastel')}} to={`/pastel/menu_pasteis/`}>
                    PASTEIS
                </Link>        
     
                <Link id='frances' className={style.button} onClick={()=>{adicionarTipo('Frances')}} to='/pastel/menu_frances'>
                   CREPE FRANCES
                </Link>

                <Link id='suico' className={style.button} onClick={()=>{adicionarTipo('Suico')}} to='/pastel/menu_suicos'>
                    CREPE SUICO
                </Link>

                <Link id='hamburgue' className={style.button} onClick={()=>{adicionarTipo('Hamburguer')}} to='/pastel/menu_hamburgue'>
                    HAMBURGUE
                </Link>

                <Link id='bebida' className={style.button} onClick={()=>{adicionarTipo('Bebida')}} to='/pastel/menu_bebidas'>
                    BEBIDAS
                </Link>

        </section>:
            controle === 3?

            <div className={style.Err}>
                Erro ao conectar ao servidor!
                <Logo/>

            </div>:
                controle === 1?
                <section className={style.busy}>
                    <div>{Mesa} - OCUPADA</div>
                    <div>Escanei outro QRCode ou solicite a quem fez o primeiro escaneamento para adicionar o seu item ao pedido que ja esta em aberto!</div>
                    <div><Logo/></div>
                </section>:undefined
        }
        </>
    )
}

export default Tipo;