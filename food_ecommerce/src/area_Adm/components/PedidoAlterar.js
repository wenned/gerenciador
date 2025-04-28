import style from './Styles/PedidoAlterar.module.css'
import { useEffect, useState } from 'react';

import { alterar } from '../Funcionalidades_adm/alteracaoItens';
import { fetchPedido } from '../../area_Cliente/Funcionalidades/buscarPedido';

function PedidoAlterar(props){
    
    const [pedido, setPedido] = useState('');

    useEffect(() => {
      fetchPedido(props.pedido)
        .then(data => {
            setPedido(data)
        })
        .catch(error => console.error(error));
    }, [props.pedido, pedido]);

    return(
        <>
        <section className={style.conteiner}>

            <div className={style.cabeca}><div>Quant.</div><div>Itens</div></div>

            <div className={style.c} >
                {
                        pedido && pedido.Itens &&
                        Object.keys(pedido.Itens).map((p, i) => {
                            return <div key={p} className={style.cab}>
                                      <div className={style.Qnt}>{pedido['Itens'][p]['Item']['Quantidade']}</div>
                                        <div className={style.itn}>{pedido['Itens'][p]['Item']['Sabor']} - {pedido['Itens'][p]['Item']['Tipo']}</div>
                                        <div className={pedido['Itens'][p]['Item']['Status'][0] === "Feito"? `${style.feito}`: style.bnt} onClick={()=>{alterar(pedido._id, pedido.Itens[p]['_id'], i)}}>Feito</div>
                                  </div>;
                        })
                    }
            </div>

            {/* <div className={style.despache}>
                    <div>Despachar</div>
            </div> */}

            <div className={style.log}>
                <span>Pedido : {props.pedido}</span>
                <span ><strong>CNPJ :</strong> 19.375.999/0001-81</span>
            </div>

        </section> 
        </>
    )

};

export default PedidoAlterar;