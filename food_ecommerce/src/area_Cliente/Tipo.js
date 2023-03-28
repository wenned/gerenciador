import Logo from '../componentes/Logo';
import style from './styles/Tipo.module.css'
import { Link, useParams} from 'react-router-dom';
import { useEffect} from 'react';

function Tipo(){

    const {keyS} = useParams();

    useEffect(() => {

        var items = ['temp', 'Modelo']
        var confi = JSON.parse(localStorage.getItem('Modelo'))
        var cont=0
        var IsertDAdo = []
        
        if(confi == null){
            //
        }else{

            for(var JIten=0; JIten < confi.Itens.length; JIten++){
                if(confi.Itens[JIten]['Item']['Valor'] > 0){
                    cont++
                }
            }

            if(keyS === undefined){
                for(var y=0; y < items.length; y++){
                    localStorage.removeItem(items[y])
                }
            }
            var letv = cont === confi.Itens.length

            if(letv === false){
                for(var JItens=0; JItens < confi.Itens.length; JItens++){
                    if(confi.Itens[JItens]['Item']['Valor'] > 0){
                        IsertDAdo.push(confi.Itens[JItens])
                    }
                }
                confi.Itens = IsertDAdo
                localStorage.setItem('Modelo', JSON.stringify(confi))

            }
        }


         const GetItems = ["menu_bebidas","menu_frances", "menu_pasteis", "menu_suicos"]

        async function carregaDados (x) {
          const resposta = await fetch(`http://192.168.31.3:8080/${x}`);
        //   const resposta = await fetch(`http://192.168.2.9:8080/${x}`);

          const RESULT = await resposta.json();
            localStorage.setItem(`${x}`, JSON.stringify(RESULT));
        }

        for(var l=0; l < GetItems.length; l++){
            carregaDados(GetItems[l]);
        };
        
      }, [keyS]);

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
            
            if(localStorage.getItem('Modelo')){
                dd = JSON.parse(localStorage.getItem('Modelo'))

                var PEds = {"Item":{"Sabor":[], "Valor": "", "Quantidade":"", "Tipo":"","Status":["Pendente","false"]}}
                PEds['Item']['Tipo'] = arg
                dd['Itens'].push(PEds)
                localStorage.setItem('Modelo', JSON.stringify(dd))

            }else{
                const pedidoId = localStorage.getItem('Pedido');
                await fetch(`http://192.168.31.3:8080/pedido/${pedidoId}`)
                // await fetch(`http://192.168.2.9:8080/pedido/${pedidoId}`)
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
                    <div id='pastel' className={style.bodY}>PASTEIS</div>
                </Link>
                
                <Link onClick={()=>{AddTipo('Frances')}} to='/pastel/menu_frances'>
                    <div id='frances' className={style.bodY}>CREPE FRANCES</div>
                </Link>

                <Link  onClick={()=>{AddTipo('Suico')}} to='/pastel/menu_suicos'>
                    <div id='suico' className={style.bodY}>CREPE SUICO</div>
                </Link>

                <Link onClick={()=>{AddTipo('Hamburguer')}} to='/pastel/menu_hamburgue'>
                    <div id='hamburgue' className={style.bodY}>HAMBURGUE</div>
                </Link>

                <Link onClick={()=>{AddTipo('Bebida')}} to='/pastel/menu_bebidas'>
                    <div id='bebida' className={style.bodY}>BEBIDAS</div>
                </Link>

                <Logo/>

        </section>

        </>
    )
}

export default Tipo;