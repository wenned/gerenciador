import { useState, useEffect} from 'react';
import { VscChromeClose } from "react-icons/vsc";

import { Link } from "react-router-dom";
import Logo from '../../componentes/Logo';
import PedidoAlterar from './PedidoAlterar';
import style from './Styles/Pasteis.module.css'

function Pasteis(){

    const date = new Date()
    const actual = new Intl.DateTimeFormat("pt-br", {timeStyle:'medium'}).format(date)
    // const actual = new Intl.DateTimeFormat("pt-br", {dateStyle:'short'}).format(date)


    const [hora, sethora] = useState('')
    const [valor, setValor] = useState([]);
    const [element, setelement] = useState(null)
    const [close, setclose] = useState(null)
    const [valida, setvalida] = useState(false)

    useEffect(() => { 

      
      async function carregaDados () {

        try {

          const resposta = await fetch(`http://192.168.31.3:8080/pedidos`);
        // const resposta = await fetch(`http://192.168.3.52:8080/pedidos`);
        // const resposta = await fetch(`http://192.168.2.9:8080/pedidos`);
          const repositorios = await resposta.json();
          setValor(repositorios);
          sethora(actual)
          setvalida(false)

      }catch (error) {
          if(String(error) === 'TypeError: Failed to fetch'){
            setvalida(true)
          }
        }
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

      <>{valor.length > 0 && valor !== false?
        <section  className={style.conteiner}>

          <div onClick={fechar} className={style.close}>{close}</div>

          <div className={style.element}>{element}</div>

            {Object.values(valor).map((pastel) => (
              <Link  key={pastel['_id']} onClick={()=>Elemente(pastel.Nu_Pedido)}>
                <div className={style.btn} ><span >{pastel.Nu_Pedido} / {hora}</span></div>
              </Link>
            ))}
        </section>
        :valida === true && valor === false?
          <div className={style.Err}>
          Erro ao conectar ao servidor!
          <Logo/>
        </div>:<div className={style.lg}><Logo/></div>
        }
      </>








    );

};

export default Pasteis;