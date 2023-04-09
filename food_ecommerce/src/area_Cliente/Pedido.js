import style from './styles/Pedido.module.css'
import { Link} from 'react-router-dom';
import Logo from '../componentes/Logo';
import { useEffect, useState } from 'react';

const MESAKEY =JSON.parse(localStorage.getItem('Key'))


async function fetchPedido(pedidoId) {

    // const resposta = await fetch(`http://192.168.3.52:8080/pedido/${pedidoId}`);
   const resposta = await fetch(`http://192.168.31.3:8080/pedido/${pedidoId}`);
    // const resposta = await fetch(`http://192.168.2.9:8080/pedido/${pedidoId}`);

    return resposta.json();
  }

async function apagar(){
    const APAGARKEY = await fetch(`http://192.168.31.3:8080/mesa/${MESAKEY[1]['Mesa']}/pagar`);
    // const APAGARKEY = await fetch(`http://192.168.3.52:8080/${MESAKEY[1]['Mesa']}/apagar`);

    return APAGARKEY.json();
};

function apagarLocal(){
    
    const REMOVE = ['Key', 'Pedido']

    for(var REMOVKEY=0; REMOVKEY < REMOVE.length; REMOVKEY++){
        localStorage.removeItem(REMOVE[REMOVKEY])
    }
}

async function removeElemnto(...args){

    try {
        const RETORNO_DADOS = await fetch(`http://192.168.31.3:8080/input/remover`, {
            method: `PUT`,
            body: JSON.stringify(args),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });
        
        const DATA = await RETORNO_DADOS.json();
        return DATA

    } catch (error) {
        console.log('Deu erro aqui ',error)
    }
}

function Pedido(){

    const [pedido, setPedido] = useState(<Logo/>);
    const [preco, setpreco] = useState ('xx.xx')
    const [contador, setContador] = useState(0);

    var pro = preco.split('.')

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
            
        if(pedido.Itens.length === 0){
            setPedido(false)
        }

    } catch (Er) {

        if(String(Er) === `TypeError: Cannot read properties of undefined (reading 'length')`){
            //
        }


    }
    const LocalStor = JSON.parse(localStorage.getItem('Key'))

    return(
        <>
        {}
        {pedido === false?
            <div className={style.Npedido}>
                 Faca um pedido!
                 <Link to={`/tipo/${LocalStor[1]['Mesa']}`}><div className={style.Div}>CLICK AQUI</div></Link>
                 <Logo/>
            </div>
        :
        
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
                        Object.keys(pedido.Itens).map((indeX) => {
                            return <div key={indeX} className={style.cab} onClick={()=>{if(window.confirm(`VOCE ESTA REMOVENDO O ITEM :  ${pedido['Itens'][indeX]['Item']['Sabor']}`)){removeElemnto(indeX, PEDIDO); handleClick()}}}><span className={style.Qnt}>{pedido['Itens'][indeX]['Item']['Quantidade']}</span>  <span className={style.tmn}>{pedido['Itens'][indeX]['Item']['Sabor']} - {pedido['Itens'][indeX]['Item']['Tipo']}</span>  <span className={style.vlu}>{pedido['Itens'][indeX]['Item']['Valor']}</span></div>;
                        })
                    }
            </div>

            <div  className={style.bodY} >

                <Link to={`/tipo/${MESAKEY[1]['Mesa']}/newitem`}>
                    <div id='pastel'><span className={style.texto}>Adicionar Novo Item</span></div>
                </Link>
            </div>

            <div className={style.bod}>
                <Link to={`/pagamento/${pedido.valor_total}`}>
                    <div id='pastel'  onClick={()=>{apagarLocal(); apagar()}}><span className={style.texto}>Efetuar Pagamento</span></div>
                </Link>
            </div>

            <span className={style.ped}>Pedido : {PEDIDO} / {LocalStor[1]['Mesa']}</span>

            <div className={style.cn}><strong>CNPJ :</strong> 19.375.999/0001-81</div>
            <div className={style.cnn}><Logo/></div>

        </section> 
        }


        </>
    )

};

export default Pedido;