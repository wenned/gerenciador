import { useState, useEffect} from 'react';

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

          const resposta = await fetch(`http://192.168.31.3:8080/pedidosPendente`);
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
        setclose('FECHAR')

      }

      function fechar(){
        setelement(null)
        setclose(null)
      }

  return (

    <section>{valor.length > 0 && valor !== false?
      <div  className={style.conteiner}>

        <div onClick={fechar} className={close === null?style.none: style.close}>{close}</div>

        <div className={style.element}>{element}</div>

          <div>
            {Object.values(valor).map((pastel) => (
              <Link  key={pastel['_id']} onClick={()=>Elemente(pastel.Nu_Pedido)}>
                <div className={style.btn} >{pastel.Nu_Pedido} / {hora}</div>
              </Link>
            ))}
          </div>
      </div>

      :valida === true && valor === false?
        <div className={style.Err}>
        Erro ao conectar ao servidor!
        <Logo/>
      </div>:<div className={style.lg}><Logo/></div>
      }
    </section>

    );

};

export default Pasteis;