import { useState, useEffect} from 'react';
import Logo from '../componentes/Logo';
import Pasteis from './Pasteis';
import { useParams } from 'react-router-dom';


function Sabores(){

    const {id} = useParams();
    const [valor, setValor] = useState(<Logo/>);

    useEffect(() => { 
        
        async function carregaDados () {
          const resposta = await fetch(`http://192.168.31.3:8080/${id}`);
          const repositorios = await resposta.json();
            setValor(<Pasteis props={repositorios}/>);
        }
        carregaDados();
      }, [id]);

    return (
        <>{valor}</>
    )

};

export default Sabores;