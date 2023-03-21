import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function Pasteis(){

    const [valor, setValor] = useState([]);

    useEffect(() => { 
        
        async function carregaDados () {
          const resposta = await fetch(`http://192.168.31.3:8080/pedidos`);
          const repositorios = await resposta.json();
            setValor(repositorios);
        }
        carregaDados();
      }, []);

    console.log(valor)
    return (
      <section >
        {
          Object.values(valor).map((pastel) => (
            <Link  key={pastel['_id']}>
              <div ><span >{Object.keys(pastel)[1]}</span></div>
            </Link>
          ))
}
      </section>
    );

};

export default Pasteis;