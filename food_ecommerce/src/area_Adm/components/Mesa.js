import { useState } from 'react';
import { useEffect } from 'react';
import style from './Styles/Mesa.module.css'
import { Link } from 'react-router-dom';

import { fecharMesa } from '../Funcionalidades_adm/fecharMesa';

const DADOS = ['Mesa 1','Mesa 2','Mesa 3','Mesa 4','Mesa 5','Mesa 6','Mesa 7','Mesa 8','Mesa 9','Mesa 10','Mesa 11','Mesa 12','Mesa 13','Mesa 14','Mesa 15','Mesa 16','Mesa 17','Mesa 18','Mesa 19','Mesa 20']

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
                    
                    <div key={index} className={ESTATO_GLOBAL === undefined? style.estilo:ESTATO_GLOBAL[`${index}`][`Estado`] === 2? style.pagamento:ESTATO_GLOBAL[`${index}`][`Estado`] === 1?style.ocupada:style.estilo}>

                        <span className={style.numero}>{mesa}</span>
                        <span>
                            <Link to={`/tipo/${mesa}`}>PEDIDO</Link>
                            <Link to='/#' onClick={() => fecharMesa(`${ESTATO_GLOBAL[`${index}`][`_id`]}`)}>FECHAR</Link>
                            <Link to='/#'>NFC-e</Link>
                        </span>

                    </div>

                    ))
                }

            </section>
        </>
    )
};

export default Mesa;