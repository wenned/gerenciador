import Logo from '../componentes/Logo';
import style from './styles/Tipo.module.css'
import { Link, useParams} from 'react-router-dom';
import { useEffect, useState} from 'react';

// Funcionalidades
import {adicionarTipo} from './Funcionalidades/adicionarQuantidade.js';

function Tipo(){

    const {keyS, Mesa} = useParams();
    const [valor, setvalor] = useState(false)
    const [iD, setiD] = useState('abrir')

    try {
        if(keyS === undefined){
            //
        }else{
            if(keyS === 'newitem'){
                var KeItem = JSON.parse(localStorage.getItem('Modelo'))
                for(var i=0; i< KeItem['Itens'].length; i++){
                    if(KeItem['Itens'][i]['Item']['Quantidade'] >= 1){
                        sessionStorage.setItem('acss', true)}
                }
            }
        }
      } catch (error) {
        if(String(error) === `TypeError: Cannot read properties of null (reading 'Itens')`){
            //
        }
      }

    useEffect(() => {
        var keyConst = []

        async function libera(){

    
            try {
                // const RespostaKEY = await fetch(`http://192.168.3.52:8080/${Mesa}/${iD}`)

                const RespostaKEY = await fetch(`http://192.168.31.3:8080/mesa/${Mesa}/${iD}`)

                const ResultKey = await RespostaKEY.json()
            
                keyConst.push(ResultKey)
                keyConst.push({"Mesa":`${Mesa}`})
                
                if(ResultKey === false){
                    //
                }else{
                    localStorage.setItem('Key', JSON.stringify(keyConst))
                    sessionStorage.setItem('N_MESA', Mesa)
                    setvalor(true)
                }

            } catch (error) {
                if(String(error) === 'TypeError: Failed to fetch'){
                    setvalor(3)
                }
            }
        }    

        var items = ['temp', 'Modelo']
        var CONFI_MODELO = JSON.parse(localStorage.getItem('Modelo'))
        var cont=0
        var IsertDAdo = []

        if(localStorage.getItem('Key') !== null){
            setvalor(true)
            var KeyLIBERA = JSON.parse(localStorage.getItem('Key'))
            setiD(KeyLIBERA.accessKey)

        }else{
            
            if(Mesa === undefined){
                setvalor(false)
                localStorage.clear()
            }else{
                libera()

            }
        }

        if(valor === true){

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


            const GetItems = ["menu_bebidas","menu_frances", "menu_pasteis", "menu_suicos"]

            async function carregaDados (x) {
                // const resposta = await fetch(`http://192.168.3.52:8080/${x}`);

                const resposta = await fetch(`http://192.168.31.3:8080/${x}`);
            //   const resposta = await fetch(`http://192.168.2.9:8080/${x}`);

                const RESULT = await resposta.json();
                // console.log('terceiro')
                localStorage.setItem(`${x}`, JSON.stringify(RESULT));
            }

            for(var l=0; l < GetItems.length; l++){
                carregaDados(GetItems[l]);
            };
        }
        
      }, [keyS, Mesa, iD, valor]);


    const numeroMesa = sessionStorage.getItem('N_MESA')

    return (
        <>{valor && valor !== 3?
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

        </section>
        
        :valor === 3?
            <div className={style.Err}>
                Erro ao conectar ao servidor!
                <Logo/>
                </div>
        
        :valor === false && Mesa === undefined && iD === null?
         <div className={style.Npedido}>
            Faca um novo pedido!
            <Link to={`/tipo/${numeroMesa}`}><div className={style.Div}>CLICK AQUI</div></Link>
            <Logo/>
         </div>
         :<section className={style.busy}>
            <div>{Mesa} - OCUPADA</div>
            <div>Escanei outro QRCode ou solicite a quem fez o primeiro escaneamento para adicionar o seu item ao pedido que ja esta em aberto!</div>
            <div><Logo/></div>
        </section>
    }

        </>
    )
}

export default Tipo;