import style from './styles/Pedido.module.css'
import { Link} from 'react-router-dom';
import Logo from '../componentes/Logo';
import { useEffect, useState } from 'react';

import {fetchPedido, apagar, removeElemnto} from './Funcionalidades/buscarPedido'

const MESAKEY =JSON.parse(localStorage.getItem('Key'))

// function apagarPedido(){
//     localStorage.removeItem('Pedido')
// }

function Pedido(){

    const [pedido, setPedido] = useState(<Logo/>);
    const [preco, setpreco] = useState ('xx.xx')
    const [contador, setContador] = useState(0);

    var PEDIDO = localStorage.getItem('Pedido');
    const MESA = sessionStorage.getItem('N_MESA')


    const handleClick = () => {
        setContador(contador + 1);
    };
    
    useEffect(() => {
      const pedidoId = localStorage.getItem('Pedido');
      fetchPedido(pedidoId)
        .then(data => {
            if(data === undefined){
                localStorage.removeItem('Pedido')
                setTimeout(()=>{window.location.href =`/`}) 
            }else{
                setPedido(data)
                setpreco(data.valor_total)
            }

        })
        .catch(error => console.error(error));
    }, [pedido, MESA]);

    try {
            
        if(pedido.valor_total === '0.00'){
            setPedido(false)
        }

    } catch (Er) {

        if(String(Er) === `TypeError: Cannot read properties of undefined (reading 'length')`){
            // 
        }
    }
    
    // if(pedido === false){
    //     setTimeout(()=>apagarPedido(), 5)
    //     setTimeout(()=>{window.location.href =`/tipo/${MESA}`}) 
    // }

    const LocalStor = JSON.parse(localStorage.getItem('Key'))

    return(
        <section className={style.conteiner}>

            <div className={style.preCo}>
                <span>Pedido : {PEDIDO} / {LocalStor[1]['Mesa']}</span>
                <span>Valor : {preco}</span>
            </div>

            <div className={style.cabeca}>
                <span>QNT</span>
                <span>ITENS</span>
                <span>VUP</span>
            </div>

            <div className={style.itens} >
                {
                        pedido && pedido.Itens &&
                        Object.keys(pedido.Itens).map((indeX) => {
                            return <div key={indeX} className={style.itensPedido} onClick={()=>{if(window.confirm(`VOCE ESTA REMOVENDO O ITEM :  ${pedido['Itens'][indeX]['Item']['Sabor']}`)){removeElemnto(pedido._id, indeX); handleClick()}}}>
                                        <span >{pedido['Itens'][indeX]['Item']['Quantidade']}</span>
                                        <span >{pedido['Itens'][indeX]['Item']['Sabor']} - {pedido['Itens'][indeX]['Item']['Tipo']}</span>
                                        <span >{pedido['Itens'][indeX]['Item']['Valor']}</span>
                                    </div>;
                        })
                    }
            </div>

            <div  className={style.conteinerBotoes} >

                <Link id='pastel' className={style.botao} to={`/tipo/${MESAKEY[1]['Mesa']}/novoItem`}>
                    ADICIONAR NOVO ITEM
                </Link>
                
                <Link id='pastel'  onClick={()=>{apagar('pagar', MESA, LocalStor)}} className={style.botao} to={`/pagamento/${pedido.Nu_Pedido}`}>
                    EFETUAR PAGAMENTO
                </Link>
            </div>

            <div className={style.cnpj}><strong>CNPJ :</strong> 19.375.999/0001-81</div>
            <div className={style.cnn}><Logo/></div>

        </section> 
    )

};

export default Pedido;