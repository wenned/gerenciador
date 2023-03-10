import Logo from '../componentes/Logo';
import style from './styles/Tipo.module.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Tipo(){
   

    useEffect(() => { 
         const GetItems = ["menu_bebidas","menu_frances", "menu_pasteis", "menu_suicos"]

        async function carregaDados (x) {
          const resposta = await fetch(`http://192.168.31.3:8080/${x}`);
          const RESULT = await resposta.json();
            localStorage.setItem(`${x}`, JSON.stringify(RESULT));
        }

        for(var l=0; l < GetItems.length; l++){
            carregaDados(GetItems[l]);
        };
        
      }, []);

    var Model = {
        "Data":"",
        "Itens":"",
        "valor_total": "",
        "Status":"Pendente",
        "Id":"",
        "Nu_Pedido":""
    }

    function AddValor(arg){
        
        if(localStorage.getItem('Modelo')){
            //
        }else{
            var PEDIDO = [{"Item":{"Sabor":[], "Valor": "", "Quantidade":"", "Tipo":"","Status":"Pendente"}}]
            PEDIDO[0]['Item']['Tipo'] = arg
            Model['Itens']= PEDIDO
            localStorage.setItem('Modelo', JSON.stringify(Model))
        }
      }
    
    return (
        <>
        <section className={style.conteiner}>

                <Link onClick={()=>{AddValor('Pastel')}} to='/pastel/menu_pasteis'>
                    <div id='pastel' className={style.bodY}><span className={style.texto}>PASTEIS</span></div>
                </Link>
                
                <Link onClick={()=>{AddValor('Frances')}} to='/pastel/menu_frances'>
                    <div id='frances' className={style.bodY}><span className={style.texto}>CREPE FRANCES</span></div>
                </Link>

                <Link  onClick={()=>{AddValor('Suico')}} to='/pastel/menu_suicos'>
                    <div id='suico' className={style.bodY}><span className={style.texto}>CREPE SUICO</span></div>
                </Link>

                <Link onClick={()=>{AddValor('Hamburguer')}} to='/pastel/menu_hamburgue'>
                    <div id='hamburgue' className={style.bodY}><span className={style.texto}>HAMBURGUE</span></div>
                </Link>

                <Link onClick={()=>{AddValor('Bebida')}} to='/pastel/menu_bebidas'>
                    <div id='bebida' className={style.bodY}><span className={style.texto}>BEBIDAS</span></div>
                </Link>

                <Logo/>

        </section>

        </>
    )
}

export default Tipo;