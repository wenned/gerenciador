import style from './styles/Home.module.css'
import MenuH from './MenuH'

import { useState } from 'react';
import Mesa from './components/Mesa';
import Producao from './components/Producao';


function Home(){

    const [valor, setvalor] = useState(<Mesa/>)


    document.addEventListener('click', (e)=>{

        switch(e.target.id){

            case 'mesa':
                setvalor(<Mesa/>)
                break

            case 'producao':
                setvalor(<Producao/>)
                break

            case 'fechar':
                setvalor('fechar')
                break

            default:
                break
            };

    })


    return (
        <section className={style.conteiner}>
            <div className={style.cont}><MenuH/></div>
            <div className={style.cont}>{valor}</div>
        </section>
    )
};

export default Home;