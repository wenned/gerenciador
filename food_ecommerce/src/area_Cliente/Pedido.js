import style from './styles/Pedido.module.css'
import { Link} from 'react-router-dom';
import Logo from '../componentes/Logo';
import { useEffect, useState } from 'react';

async function fetchPedido(pedidoId) {
    const resposta = await fetch(`http://192.168.31.3:8080/pedido/${pedidoId}`);
    // const resposta = await fetch(`http://192.168.2.9:8080/pedido/${pedidoId}`);

    return resposta.json();
  }

function Pedido(){

    const [pedido, setPedido] = useState(<Logo/>);
    const [preco, setpreco] = useState ('xx.xx')
    
     var pro = preco.split('.')

    var p = localStorage.getItem('Pedido');

    function apagar(){localStorage.clear('Pedido');}

    useEffect(() => {
      const pedidoId = localStorage.getItem('Pedido');
      fetchPedido(pedidoId)
        .then(data => {
            setPedido(data)
            setpreco(data.valor_total)
        })
        .catch(error => console.error(error));
    }, []);

    return(
        <>
        <section className={style.conteiner}>

            <div className={style.pro}>
                <div className={style.valO}>
                    <span className={style.vli}>{pro[0]}</span>
                    <span className={style.vlf}>.{pro[1]}</span>
                    <span className={style.vlt}>TOTAL</span></div>
                </div>

            <div className={style.cabeca}><span>Quantidade</span><span>Itens</span><span>Valor Unit</span></div>

            <div className={style.c} >
                {
                        pedido && pedido.Itens &&
                        Object.keys(pedido.Itens).map((p) => {
                            return <div key={p} className={style.cab}><span className={style.Qnt}>{pedido['Itens'][p]['Item']['Quantidade']}</span>  <span className={style.tmn}>{pedido['Itens'][p]['Item']['Sabor']} - {pedido['Itens'][p]['Item']['Tipo']}</span>  <span className={style.vlu}>{pedido['Itens'][p]['Item']['Valor']}</span></div>;
                        })
                    }
            </div>

            <div  className={style.bodY} >

                <Link to='/tipo/newitem'>
                    <div id='pastel'><span className={style.texto}>Adicionar Novo Item</span></div>
                </Link>
            </div>

            <div className={style.bod}>
                <Link to='/tipo'>
                    <div id='pastel'  onClick={apagar}><span className={style.texto}>Pagar</span></div>
                </Link>
            </div>
            <span className={style.ped}>Pedido : {p}</span>
            <div className={style.cn}><strong>CNPJ :</strong> 19.375.999/0001-81</div>
            <div className={style.cnn}><Logo/></div>

        </section> 
        </>
    )

};

export default Pedido;