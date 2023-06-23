import Logo from '../componentes/Logo';
import style from './styles/Tipo.module.css'
import { Link, useParams} from 'react-router-dom';

// Funcionalidades
import {adicionarTipo} from './Funcionalidades/adicionarQuantidade.js';
import {carga, libera, validar} from './Funcionalidades/verificacaoKeys'
import { /*useCallback*/ useState } from 'react';
import { removerItensArmazenado } from './Funcionalidades/remocaoItensLocal';

function Tipo(){
    
    const {Operacao ,Mesa} = useParams();
    const [controle, setControle] = useState(false);

    const key = JSON.parse(localStorage.getItem('Key'))

    try {

        if(Operacao === 'novoItem'){

            // console.log('novo item')

        }else{
            validar(Mesa, key)
            .then((resp)=>{

                if(resp === false && localStorage.getItem('Key') === null){
                    libera(Mesa)
                        .then((retor)=>{
                            if(retor === true){
                                carga()
                            }
                        })
                }

                if(resp === true){
                    carga()
                }
                
                if(resp === false && localStorage.getItem('Key') !== null && localStorage.getItem('Key') !== undefined){
                    setControle(true)
                    removerItensArmazenado()

                }

            })
        }

    } catch (error) {
        console.log(error)
    }

    return (
        <>
        {controle === false?
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
            controle === 1?

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