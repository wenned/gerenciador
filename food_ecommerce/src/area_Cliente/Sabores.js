import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Logo from '../componentes/Logo';
import style from './styles/Sabores.module.css'

import { adicionarTipo } from './Funcionalidades/adicionarValores';

function Sabores(){

    const {id} = useParams();
    const [valor, setValor] = useState([]);

    useEffect(() => { 
        
        async function carregaDados () {

          const resposta = await fetch(`http://192.168.31.35:8080/${id}`);
          const repositorios = await resposta.json();
          setValor(repositorios);
        }
        carregaDados();
      }, [id]);

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
            

              <Link className={style.bo} onClick={ ()=> adicionarTipo(pastel.Tipo)} key={pastel._id} to={`/quantidade/${pastel.Valor}`}>
                
              <span>{pastel.Tipo}</span> 
              <span>{'R$ '+ pastel.Valor}</span>

              </Link>

          ))
        ) : (
          <Logo/>
        )}
      </section>
    );

};

export default Sabores;