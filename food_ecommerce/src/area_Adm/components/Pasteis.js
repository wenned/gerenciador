import { useState, useEffect} from 'react';
import { VscChromeClose } from "react-icons/vsc";

import { Link } from "react-router-dom";
import Logo from '../../componentes/Logo';
import PedidoAlterar from './PedidoAlterar';
import style from './Styles/Pasteis.module.css'

function Pasteis(){

    const date = new Date()
    const actual = new Intl.DateTimeFormat("pt-br", {timeStyle:'medium'}).format(date)

    const [hora, sethora] = useState('')
    const [valor, setValor] = useState([]);
    const [element, setelement] = useState(null)
    const [close, setclose] = useState(null)

    useEffect(() => { 
        
        async function carregaDados () {
          const resposta = await fetch(`http://192.168.31.3:8080/pedidos`);
          const repositorios = await resposta.json();
            setValor(repositorios);
            sethora(actual)
        }

        carregaDados();

        const intervalId = setInterval(carregaDados, 1000);

        return () => clearInterval(intervalId);

      }, [actual]);

      function Elemente (nu){

        setelement(<PedidoAlterar pedido={nu}/>)
        setclose(<VscChromeClose/>)

      }

      function fechar(){
        setelement(null)
        setclose(null)
      }
      
    return (
      <section  className={style.conteiner}>
        {/* {hora[3]}{hora[4]}{hora[5]}{hora[6]}{hora[7]} */}

        <div onClick={fechar} className={style.close}>{close}</div>

        <div className={style.element}>{element}</div>

        {valor?(
          Object.values(valor).map((pastel) => (
            <Link  key={pastel['_id']} onClick={()=>Elemente(pastel.Nu_Pedido)}>
              <div className={style.btn} ><span >{pastel.Nu_Pedido} / {hora}</span></div>
            </Link>
          ))
        ):(
          <div className={style.lg}><Logo/></div>
        )}
      </section>
    );

};

export default Pasteis;