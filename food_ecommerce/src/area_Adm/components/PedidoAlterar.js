import style from './Styles/PedidoAlterar.module.css'
// import { Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from '../../componentes/Logo'

async function fetchPedido(pedidoId) {

    const resposta = await fetch(`http://192.168.31.3:8080/pedidoUnico/${pedidoId}`);
    
    return resposta.json();
  }

  async function alterar(i,e) {

    const body = JSON.stringify({ codigo: e });
    // await fetch(`http://192.168.3.52:8080/input/feito/${i}`, {

   await fetch(`http://192.168.31.3:8080/input/feito/${i}`, {
    // await fetch(`http://192.168.2.9:8080/input/feito/${i}`, {

    method: 'PUT',
      body: body,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    });
    
  }

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
                        Object.keys(pedido.Itens).map((p) => {
                            return <div key={p} className={style.cab}>
                                      <div className={style.Qnt}>{pedido['Itens'][p]['Item']['Quantidade']}</div>
                                        <div className={style.itn}>{pedido['Itens'][p]['Item']['Sabor']} - {pedido['Itens'][p]['Item']['Tipo']}</div>
                                        <div className={pedido['Itens'][p]['Item']['Status'][0] === "Feito"? `${style.feito}`: style.bnt} onClick={()=>{alterar(p, props.pedido)}}>Feito</div>
                                  </div>;
                        })
                    }
            </div>

            {/* <div className={style.despache}>
                    <div>Despachar</div>
            </div> */}

            <div className={style.ped}>Pedido : {props.pedido}</div>

            <div className={style.cn}><strong>CNPJ :</strong> 19.375.999/0001-81</div>
            <div className={style.log}><Logo/></div>

        </section> 
        </>
    )

};

export default PedidoAlterar;