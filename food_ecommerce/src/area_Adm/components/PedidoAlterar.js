import style from './Styles/PedidoAlterar.module.css'
// import { Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from '../../componentes/Logo'

async function fetchPedido(pedidoId) {
    const resposta = await fetch(`http://192.168.31.3:8080/pedido/${pedidoId}`);
    return resposta.json();
  }

function PedidoAlterar(props){

    const [pedido, setPedido] = useState('');
    



    useEffect(() => {
      fetchPedido(props.pedido)
        .then(data => {
            setPedido(data)
        })
        .catch(error => console.error(error));
    }, [props.pedido]);
 
    return(
        <>
        <section className={style.conteiner}>

            <div className={style.cabeca}><div>Quant.</div><div>Itens</div></div>

            <div className={style.c} >
                {
                        pedido && pedido.Itens &&
                        Object.keys(pedido.Itens).map((p) => {
                            return <div key={p} className={style.cab}><div className={style.Qnt}>{pedido['Itens'][p]['Item']['Quantidade']}</div>  <div className={style.itn}>{pedido['Itens'][p]['Item']['Sabor']}</div></div>;
                        })
                    }
            </div>

            {/* <div >
                <Link to='/tipo'>
                    <div id='pastel' ><span>Pagar</span></div>
                </Link>
            </div> */}
            <div className={style.ped}>Pedido : {props.pedido}</div>

            <div className={style.cn}><strong>CNPJ :</strong> 19.375.999/0001-81</div>
            <div className={style.log}><Logo/></div>

        </section> 
        </>
    )

};

export default PedidoAlterar;