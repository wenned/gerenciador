import { useState } from 'react';
import { useEffect } from 'react';
import style from './Styles/Mesa.module.css'

async function fecharMesa(NMesa){

    const Resposta = await fetch(`http://192.168.31.3:8080/mesa/${NMesa}/apagar`);
    return Resposta
};

const DADOS = ['Mesa1','Mesa2','Mesa3','Mesa4','Mesa5','Mesa6','Mesa7','Mesa8','Mesa9','Mesa10','Mesa11','Mesa12','Mesa13','Mesa14','Mesa15','Mesa16','Mesa17','Mesa18','Mesa19','Mesa20',]

function Mesa(){
    const [ESTATO_GLOBAL, setESTADO_GLOBAL] = useState()


    useEffect(() => {
        async function capture() {
          const resposta = await fetch(`http://192.168.31.3:8080/mesas`);
          const RESPOSTA = await resposta.json();
          setESTADO_GLOBAL(RESPOSTA);
        }
      
        capture();
      
        const intervalId = setInterval(capture, 2000);
        return () => clearInterval(intervalId);
      }, []);

    return (
        <>
            <section className={style.conteiner}>

                {
                    Object.values(DADOS).map((mesa, index)=>(
                    
                    <div key={index} className={ESTATO_GLOBAL === undefined? style.estilo:ESTATO_GLOBAL[`${index}`][`${mesa}`] === 'pagar'? style.pagamento:ESTATO_GLOBAL[`${index}`][`${mesa}`] === false?style.estilo:style.ocupada}>

                        <span className={style.numero}>{mesa}</span>
                        <span>
                            <a href={`/tipo/${mesa}`} >PEDIDO</a>
                            <a href='/#' onClick={()=>fecharMesa(`${mesa}`)}>FECHAR</a>
                            <a href='/#' >NFC-e</a>
                        </span>

                    </div>

                    ))
                }

            </section>
        </>
    )
};

export default Mesa;