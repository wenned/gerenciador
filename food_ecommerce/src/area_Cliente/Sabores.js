import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Logo from '../componentes/Logo';
import style from './styles/Sabores.module.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Sabores(){

    const {id} = useParams();
    const [valor, setValor] = useState([]);

    useEffect(() => { 
        
        async function carregaDados () {
          // const resposta = await fetch(`http://192.168.3.52:8080/${id}`);

          const resposta = await fetch(`http://192.168.31.3:8080/${id}`);
          // const resposta = await fetch(`http://192.168.2.9:8080/${id}`);

          const repositorios = await resposta.json();
            setValor(repositorios);
        }
        carregaDados();
      }, [id]);

    function AddValor(arg){
      var dado;      
      var reload = JSON.parse(localStorage.getItem('Modelo'))
      dado = reload

      dado['Itens'].forEach((element, index)=> {
        if(element['Item']['Valor'].length === 0){
          dado['Itens'][index]['Item']['Sabor'] = arg
          localStorage.setItem('Modelo', JSON.stringify(dado))
        }
      });
    }

    var verif;

    if(JSON.parse(localStorage.getItem(`${id}`) === null)){
      verif = 0
    }else{
      verif = JSON.parse(localStorage.getItem(`${id}`))
    }

    return (
      <section className={style.conteiner}>
        {verif.length > 0 ? (
          Object.values(valor).map((pastel, ind) => (
            
            <div key={ind} className={style.atl}>
              
              <div className={style.boo}>  R${pastel[`${Object.keys(pastel)[1]}`].$numberDecimal}  </div>
              
              <Link onClick={ ()=> AddValor(Object.keys(pastel)[1])} key={pastel['_id']} to={`/quantidade/${pastel[`${Object.keys(pastel)[1]}`].$numberDecimal}`}>
                
                <div className={style.bo}>{Object.keys(pastel)[1]}</div>

              </Link>
            </div>
          ))
        ) : (
          <Logo/>
        )}
      </section>
    );

};

export default Sabores;