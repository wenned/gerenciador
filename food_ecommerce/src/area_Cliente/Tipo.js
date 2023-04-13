import Logo from '../componentes/Logo';
import style from './styles/Tipo.module.css'
import { Link, useParams} from 'react-router-dom';

// Funcionalidades
import {adicionarTipo} from './Funcionalidades/adicionarQuantidade.js';
import {carga, libera, validar} from './Funcionalidades/verificacaoKeys'
import { useState } from 'react';

function Tipo(){

    const {keyS, Mesa} = useParams();
    const [controle, setControle] = useState(true)

    var items = ['temp', 'Modelo']
    var CONFI_MODELO = JSON.parse(localStorage.getItem('Modelo'))
    var cont=0
    var IsertDAdo = []

    let leT = localStorage.getItem('Key') !== null && localStorage.getItem('Key') !== undefined

    try {

        if(localStorage.getItem('Key') !== null && localStorage.getItem('Key') !== undefined){
            validar(localStorage.getItem('Key'),'abrir')
            .then((resposta)=>{ 
                if(resposta === false){
                    localStorage.clear()
                    libera(Mesa)
                    carga()
                }else{
                    setControle(true)
                    carga()
                }
                
            })
        }else{
            if(leT === false){
                libera(Mesa)
                .then((re)=>{
                    if(re === 3){
                        setControle(re)
                    }
                    if(re === false){
                        setControle(false)
                    }
                })
            }
        }

        if(CONFI_MODELO == null){
            //
        }else{
            for(var JIten=0; JIten < CONFI_MODELO.Itens.length; JIten++){
                if(CONFI_MODELO.Itens[JIten]['Item']['Valor'] > 0){
                    cont++
                }
            }

            if(keyS === undefined){
                for(var y=0; y < items.length; y++){
                    localStorage.removeItem(items[y])
                }
            }
            var letv = cont === CONFI_MODELO.Itens.length

            if(letv === false){
                for(var JItens=0; JItens < CONFI_MODELO.Itens.length; JItens++){
                    if(CONFI_MODELO.Itens[JItens]['Item']['Valor'] > 0){
                        IsertDAdo.push(CONFI_MODELO.Itens[JItens])
                    }
                }

                if(IsertDAdo.length !== 0){
                    CONFI_MODELO.Itens = IsertDAdo
                    localStorage.setItem('Modelo', JSON.stringify(CONFI_MODELO))
                }
            }
        }

      } catch (error) {

        if(String(error) === `TypeError: Cannot read properties of null (reading 'Itens')`){
            //
        }
      }

    return (
        <>
        {controle === true?
        <section className={style.conteiner}>
                
                <Link onClick={()=>{adicionarTipo('Pastel')}} to={`/pastel/menu_pasteis/`}>
                    <div id='pastel' className={style.bodY}>PASTEIS</div>
                </Link>
                
                <Link onClick={()=>{adicionarTipo('Frances')}} to='/pastel/menu_frances'>
                    <div id='frances' className={style.bodY}>CREPE FRANCES</div>
                </Link>

                <Link  onClick={()=>{adicionarTipo('Suico')}} to='/pastel/menu_suicos'>
                    <div id='suico' className={style.bodY}>CREPE SUICO</div>
                </Link>

                {/* <Link onClick={()=>{adicionarTipo('Hamburguer')}} to='/pastel/menu_hamburgue'> */}
                    <div id='hamburgue' className={style.bodY}>HAMBURGUE</div>
                {/* </Link> */}

                <Link onClick={()=>{adicionarTipo('Bebida')}} to='/pastel/menu_bebidas'>
                    <div id='bebida' className={style.bodY}>BEBIDAS</div>
                </Link>

                <Logo/>

        </section>:
            controle === 3?
            <div className={style.Err}>
                Erro ao conectar ao servidor!
                <Logo/>
            </div>:
                <section className={style.busy}>
                    <div>{Mesa} - OCUPADA</div>
                    <div>Escanei outro QRCode ou solicite a quem fez o primeiro escaneamento para adicionar o seu item ao pedido que ja esta em aberto!</div>
                    <div><Logo/></div>
                </section>
        }
        </>
    )
}

export default Tipo;