import Logo from '../componentes/Logo';
import style from './styles/Tipo.module.css'
import { Link } from 'react-router-dom';

function Tipo(){

    var Model = {
        "Data":"",
        "Itens":[
            {"Item":{"Sabor":[], "valor": "", "quantidade":"", "Tipo":"","Status":"Pendente"}}
        ],
        "valor_total": "",
        "Status":"Pendente",
        "Id":"",
        "Nu_Pedido":""
    }

    function AddValor(arg){
        
        if(localStorage.getItem('Modelo')){
            //
        }else{
            Model['Itens'][0]['Item']['Tipo'] = arg
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

                <Link onClick={()=>{AddValor('Hamburger')}} to='/pastel/menu_hamburgue'>
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