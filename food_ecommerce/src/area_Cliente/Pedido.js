import style from './styles/Pedido.module.css'
import { Link} from 'react-router-dom';
import Logo from '../componentes/Logo';
import { useEffect, useState } from 'react';

async function fetchPedido(pedidoId) {
    const resposta = await fetch(`http://192.168.31.3:8080/pedido/${pedidoId}`);
    return resposta.json();
  }

function Pedido(){

    const [pedido, setPedido] = useState(<Logo/>);

    var p = localStorage.getItem('Pedido');

    function apagar(){localStorage.clear('Pedido');}

    useEffect(() => {
      const pedidoId = localStorage.getItem('Pedido');
      fetchPedido(pedidoId)
        .then(data => setPedido(data))
        .catch(error => console.error(error));
    }, []);

    return(
        <>
        <section className={style.conteiner}>
            <div className={style.preco}>TOTAL : {pedido.valor_total}</div>
            <div className={style.cabeca}><span>Quantidade</span><span>Itens</span><span>Valor Unit</span></div>

            <div className={style.c} >
                {
                        pedido && pedido.Itens &&
                        Object.keys(pedido.Itens).map((p) => {
                            return <div key={p} className={style.cab}><span >{pedido['Itens'][p]['Item']['Quantidade']}</span> - <span>{pedido['Itens'][p]['Item']['Sabor']}</span> - <span>{pedido['Itens'][p]['Item']['Valor']}</span></div>;
                        })
                    }
            </div>

            <div  className={style.bodY} >

                <Link to='/tipo/newitem'>
                    <div id='pastel'><span className={style.texto}>ADICIONAR NOVO ITEM</span></div>
                </Link>
            </div>

            <div className={style.bod}>
                <Link to='/tipo'>
                    <div id='pastel'  onClick={apagar}><span className={style.texto}>PAGAR</span></div>
                </Link>
            </div>
            <span className={style.ped}>Pedido : {p}</span>

            <Logo/>

        </section> 
        </>
    )

};

export default Pedido;