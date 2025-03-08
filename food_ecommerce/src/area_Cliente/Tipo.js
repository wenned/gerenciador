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
                
                <div className={style.alt}>
                    <Link onClick={()=>{adicionarTipo('Pastel')}} to={`/pastel/menu_pasteis/`}>
                        <div id='pastel' className={style.bodY}>PASTEIS</div>
                    </Link>
                </div>
                
                <div className={style.alt}>
                    <Link onClick={()=>{adicionarTipo('Frances')}} to='/pastel/menu_frances'>
                        <div id='frances' className={style.bodY}>CREPE FRANCES</div>
                    </Link>
                </div>

                <div className={style.alt}>
                    <Link  onClick={()=>{adicionarTipo('Suico')}} to='/pastel/menu_suicos'>
                        <div id='suico' className={style.bodY}>CREPE SUICO</div>
                    </Link>
                </div>

                <div className={style.alt}>
                    <Link onClick={()=>{adicionarTipo('Hamburguer')}} to='/pastel/menu_hamburgue'>
                        <div id='hamburgue' className={style.bodY}>HAMBURGUE</div>
                    </Link>
                </div>

                <div className={style.alt}>
                    <Link onClick={()=>{adicionarTipo('Bebida')}} to='/pastel/menu_bebidas'>
                        <div id='bebida' className={style.bodY}>BEBIDAS</div>
                    </Link>
                </div>

                <div className={style.radape}><Logo/></div>

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