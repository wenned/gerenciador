import Logo from '../componentes/Logo';
import style from './styles/Tipo.module.css'
import { Link } from 'react-router-dom';
import { useEffect} from 'react';
import { useParams } from 'react-router-dom';

function Tipo(){

    const {keyS} = useParams();

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

    var acss = false
    var dd;

    async function AddTipo(arg){

        if(localStorage.getItem('Pedido') === null){

            if(localStorage.getItem('Modelo')){
                
                if(acss === true){
                    dd = JSON.parse(localStorage.getItem('Modelo'))

                    var PED = {"Item":{"Sabor":[], "Valor": "", "Quantidade":"", "Tipo":"","Status":["Pendente","false"]}}
                    PED['Item']['Tipo'] = arg
                    dd['Itens'].push(PED)
                    localStorage.setItem('Modelo', JSON.stringify(dd))
                    acss = false
                }else{
                    // localStorage.clear('Modelo')
                }


            }else{
                var PEDIDO = [{"Item":{"Sabor":[], "Valor": "", "Quantidade":"", "Tipo":"","Status":["Pendente","false"]}}]
                PEDIDO[0]['Item']['Tipo'] = arg
                Model['Itens']= PEDIDO
                localStorage.setItem('Modelo', JSON.stringify(Model))
            }
        }else{
            const pedidoId = localStorage.getItem('Pedido');
            await fetch(`http://192.168.31.3:8080/pedido/${pedidoId}`)
            .then((res) =>{
                return res.json()
            }).then(doc =>{
                localStorage.setItem('temp', JSON.stringify(doc))
            });

            dd = JSON.parse(localStorage.getItem('temp'))

            var PEd = {"Item":{"Sabor":[], "Valor": "", "Quantidade":"", "Tipo":"","Status":["Pendente","false"]}}
            PEd['Item']['Tipo'] = arg
            dd['Itens'].push(PEd)
            localStorage.setItem('Modelo', JSON.stringify(dd))

        }
      }

      try {
        if(keyS === undefined){
            //
        }else{
            if(keyS === 'newitem'){
                var KeItem = JSON.parse(localStorage.getItem('Modelo'))
                for(var i=0; i< KeItem['Itens'].length; i++){
                    if(KeItem['Itens'][i]['Item']['Quantidade'] >= 1){acss = true}
                }

            }
        }
      } catch (error) {
        
      }

    return (
        <>
        <section className={style.conteiner}>
            
                <Link onClick={()=>{AddTipo('Pastel')}} to={`/pastel/menu_pasteis/`}>
                    <div id='pastel' className={style.bodY}><span className={style.texto}>PASTEIS</span></div>
                </Link>
                
                <Link onClick={()=>{AddTipo('Frances')}} to='/pastel/menu_frances'>
                    <div id='frances' className={style.bodY}><span className={style.texto}>CREPE FRANCES</span></div>
                </Link>

                <Link  onClick={()=>{AddTipo('Suico')}} to='/pastel/menu_suicos'>
                    <div id='suico' className={style.bodY}><span className={style.texto}>CREPE SUICO</span></div>
                </Link>

                <Link onClick={()=>{AddTipo('Hamburguer')}} to='/pastel/menu_hamburgue'>
                    <div id='hamburgue' className={style.bodY}><span className={style.texto}>HAMBURGUE</span></div>
                </Link>

                <Link onClick={()=>{AddTipo('Bebida')}} to='/pastel/menu_bebidas'>
                    <div id='bebida' className={style.bodY}><span className={style.texto}>BEBIDAS</span></div>
                </Link>

                <Logo/>

        </section>

        </>
    )
}

export default Tipo;