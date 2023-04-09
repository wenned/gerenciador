import { useState } from 'react';
import { useEffect } from 'react';
import style from './Styles/Mesa.module.css'
// import LogoLarge from '../../componentes/Logo';

async function fecharMesa(NMesa){

    const Resposta = await fetch(`http://192.168.31.3:8080/mesa/${NMesa}/apagar`);
    return Resposta
};

function Mesa(){
    const [ESTATO_GLOBAL, setESTADO_GLOBAL] = useState()


    useEffect(() => {
        async function capture() {
          const resposta = await fetch(`http://192.168.31.3:8080/mesas`);
          const RESPOSTA = await resposta.json();
          setESTADO_GLOBAL(RESPOSTA);
        }
      
        capture();
      
        const intervalId = setInterval(capture, 2000);
        return () => clearInterval(intervalId);
      }, []);

    return (
        <>
            <section className={style.conteiner}>

                <div className={ESTATO_GLOBAL === undefined? style.estilo:ESTATO_GLOBAL[0]['Mesa1'] === 'pagar'? style.pagamento:ESTATO_GLOBAL[0]['Mesa1'] === false?style.estilo:style.ocupada}><span><span>MESA 1</span>
                    <a href='/tipo/Mesa1' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa1')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>

                <div className={ESTATO_GLOBAL === undefined? style.estilo: ESTATO_GLOBAL[1]['Mesa2'] === false? style.estilo:style.ocupada}><span><span>MESA 2</span>
                    <a href='/tipo/Mesa2' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa2')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>
                
                <div className={ESTATO_GLOBAL === undefined? style.estilo: ESTATO_GLOBAL[2]['Mesa3'] === false? style.estilo:style.ocupada}><span><span>MESA 3</span>
                    <a href='/tipo/Mesa3' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa3')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>
                
                <div className={ESTATO_GLOBAL === undefined? style.estilo: ESTATO_GLOBAL[3]['Mesa4'] === false? style.estilo:style.ocupada}><span><span>MESA 4</span>
                    <a href='/tipo/Mesa4' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa4')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>
                
                <div className={ESTATO_GLOBAL === undefined? style.estilo: ESTATO_GLOBAL[4]['Mesa5'] === false? style.estilo:style.ocupada}><span><span>MESA 5</span>
                    <a href='/tipo/Mesa5' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa5')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>
                
                <div className={ESTATO_GLOBAL === undefined? style.estilo: ESTATO_GLOBAL[5]['Mesa6'] === false? style.estilo:style.ocupada}><span><span>MESA 6</span>
                    <a href='/tipo/Mesa6' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa6')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>
                
                <div className={ESTATO_GLOBAL === undefined? style.estilo: ESTATO_GLOBAL[6]['Mesa7'] === false? style.estilo:style.ocupada}><span><span>MESA 7</span>
                    <a href='/tipo/Mesa7' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa7')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>
                
                <div className={ESTATO_GLOBAL === undefined? style.estilo: ESTATO_GLOBAL[7]['Mesa8'] === false? style.estilo:style.ocupada}><span><span>MESA 8</span>
                    <a href='/tipo/Mesa8' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa8')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>
                
                <div className={ESTATO_GLOBAL === undefined? style.estilo: ESTATO_GLOBAL[8]['Mesa9'] === false? style.estilo:style.ocupada}><span><span>MESA 9</span>
                    <a href='/tipo/Mesa9' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa9')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>
                
                <div className={ESTATO_GLOBAL === undefined? style.estilo: ESTATO_GLOBAL[9]['Mesa10'] === false? style.estilo:style.ocupada}><span><span>MESA 10</span>
                    <a href='/tipo/Mesa10' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa10')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>
                
                <div className={ESTATO_GLOBAL === undefined? style.estilo: ESTATO_GLOBAL[10]['Mesa11'] === false? style.estilo:style.ocupada}><span><span>MESA 11</span>
                    <a href='/tipo/Mesa11' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa11')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>
                
                <div className={ESTATO_GLOBAL === undefined? style.estilo: ESTATO_GLOBAL[11]['Mesa12'] === false? style.estilo:style.ocupada}><span><span>MESA 12</span>
                    <a href='/tipo/Mesa12' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa12')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>
                
                <div className={ESTATO_GLOBAL === undefined? style.estilo: ESTATO_GLOBAL[12]['Mesa13'] === false? style.estilo:style.ocupada}><span><span>MESA 13</span>
                    <a href='/tipo/Mesa13' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa13')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>
                
                <div className={ESTATO_GLOBAL === undefined? style.estilo: ESTATO_GLOBAL[13]['Mesa14'] === false? style.estilo:style.ocupada}><span><span>MESA 14</span>
                    <a href='/tipo/Mesa14' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa14')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>
                
                <div className={ESTATO_GLOBAL === undefined? style.estilo: ESTATO_GLOBAL[14]['Mesa15'] === false? style.estilo:style.ocupada}><span><span>MESA 15</span>
                    <a href='/tipo/Mesa15' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa15')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>
                
                <div className={ESTATO_GLOBAL === undefined? style.estilo: ESTATO_GLOBAL[15]['Mesa16'] === false? style.estilo:style.ocupada}><span><span>MESA 16</span>
                    <a href='/tipo/Mesa16' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa16')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>
                
                <div className={ESTATO_GLOBAL === undefined? style.estilo: ESTATO_GLOBAL[16]['Mesa17'] === false? style.estilo:style.ocupada}><span><span>MESA 17</span>
                    <a href='/tipo/Mesa17' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa17')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>
                
                <div className={ESTATO_GLOBAL === undefined? style.estilo: ESTATO_GLOBAL[17]['Mesa18'] === false? style.estilo:style.ocupada}><span><span>MESA 18</span>
                    <a href='/tipo/Mesa18' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa18')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>
                
                <div className={ESTATO_GLOBAL === undefined? style.estilo: ESTATO_GLOBAL[18]['Mesa19'] === false? style.estilo:style.ocupada}><span><span>MESA 19</span>
                    <a href='/tipo/Mesa19' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa19')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>
                
                <div className={ESTATO_GLOBAL === undefined? style.estilo: ESTATO_GLOBAL[19]['Mesa20'] === false? style.estilo:style.ocupada}><span><span>MESA 20</span>
                    <a href='/tipo/Mesa20' >Pedido</a>
                    <a href='/#' onClick={()=>fecharMesa('Mesa20')}>Fechar</a>
                    <a href='/#' >Emitir Cumpon</a>
                    </span>
                </div>

                    
            </section>
            {/* <section className={style.at}><LogoLarge/></section> */}
        </>
    )
};

export default Mesa;