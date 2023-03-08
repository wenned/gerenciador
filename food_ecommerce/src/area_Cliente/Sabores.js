import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Logo from '../componentes/Logo';
import style from './styles/Sabores.module.css'

function Sabores(){

    const {id} = useParams();
    const [valor, setValor] = useState([]);

    useEffect(() => { 
        
        async function carregaDados () {
          const resposta = await fetch(`http://192.168.31.3:8080/${id}`);
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
        if(element['Item']['Sabor'].length === 0){
          dado['Itens'][0]['Item']['Sabor'] = arg
          localStorage.setItem('Modelo', JSON.stringify(dado))
        }
      });
    }

    return (
      <section className={style.conteiner}>
        {valor ? (
          Object.values(valor).map((pastel) => (
            <Link onClick={ ()=> AddValor(Object.keys(pastel)[1])} key={pastel['_id']} to='/quantidade'>
              <div className={style.bo}><span className={style.texto}>{Object.keys(pastel)[1]}</span></div>
            </Link>
          ))
        ) : (
          <Logo/>
        )}
      </section>
    );

};

export default Sabores;