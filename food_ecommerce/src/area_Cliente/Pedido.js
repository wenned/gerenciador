import style from './styles/Pedido.module.css'
import { Link} from 'react-router-dom';
import Logo from '../componentes/Logo';
import { useEffect, useState } from 'react';

import {fetchPedido, apagar, removeElemnto} from './Funcionalidades/buscarPedido'

const MESAKEY =JSON.parse(localStorage.getItem('Key'))

function apagarLocal(){
    
    const REMOVE = ['Key', 'Pedido']

    for(var REMOVKEY=0; REMOVKEY < REMOVE.length; REMOVKEY++){
        localStorage.removeItem(REMOVE[REMOVKEY])
    }
}

function apagarPedido(){
    localStorage.removeItem('Pedido')
}

function Pedido(){

    const [pedido, setPedido] = useState(<Logo/>);
    const [preco, setpreco] = useState ('xx.xx')
    const [contador, setContador] = useState(0);

    var PEDIDO = localStorage.getItem('Pedido');

    const handleClick = () => {
        setContador(contador + 1);
    };
    
    useEffect(() => {
      const pedidoId = localStorage.getItem('Pedido');
      fetchPedido(pedidoId)
        .then(data => {
            setPedido(data)
            setpreco(data.valor_total)
        })
        .catch(error => console.error(error));
    }, [contador]);

    try {
            
        if(pedido.valor_total === '0.00'){
            setPedido(false)
        }

    } catch (Er) {

        if(String(Er) === `TypeError: Cannot read properties of undefined (reading 'length')`){
            // 
        }
    }
    
    if(pedido === false){
        apagar('deletar')
        setTimeout(()=>apagarPedido(), 5)
        var MESA = sessionStorage.getItem('N_MESA')
        setTimeout(()=>{window.location.href =`/tipo/${MESA}`}) 
    }

    const LocalStor = JSON.parse(localStorage.getItem('Key'))
    console.log()

    return(
        <>
        <section className={style.conteiner}>
            <span className={style.ped}>Pedido : {PEDIDO} / {LocalStor[1]['Mesa']}</span>
            <div className={style.preCo}>{preco}</div>


            <div className={style.cabeca}><span>Quantidade</span><span>Itens</span><span>Valor Unit</span></div>

            <div className={style.c} >
                {
                        pedido && pedido.Itens &&
                        Object.keys(pedido.Itens).map((indeX) => {
                            return <div key={indeX} className={style.cab} onClick={()=>{if(window.confirm(`VOCE ESTA REMOVENDO O ITEM :  ${pedido['Itens'][indeX]['Item']['Sabor']}`)){removeElemnto(indeX, PEDIDO); handleClick()}}}><span className={style.Qnt}>{pedido['Itens'][indeX]['Item']['Quantidade']}</span>  <span className={style.tmn}>{pedido['Itens'][indeX]['Item']['Sabor']} - {pedido['Itens'][indeX]['Item']['Tipo']}</span>  <span className={style.vlu}>{pedido['Itens'][indeX]['Item']['Valor']}</span></div>;
                        })
                    }
            </div>

            <div  className={style.bodY} >

                <Link to={`/tipo/${MESAKEY[1]['Mesa']}/newitem`}>
                    <div id='pastel' className={style.cn}>Adicionar Novo Item</div>
                </Link>
            </div>

            <div className={style.bod}>
                <Link to={`/pagamento/${pedido.Nu_Pedido}`}>
                    <div id='pastel'  onClick={()=>{apagarLocal(); apagar('pagar')}} className={style.cn}>Efetuar Pagamento</div>
                </Link>
            </div>


            <div className={style.cnpj}><strong>CNPJ :</strong> 19.375.999/0001-81</div>
            <div className={style.cnn}><Logo/></div>

        </section> 
        </>
    )

};

export default Pedido;