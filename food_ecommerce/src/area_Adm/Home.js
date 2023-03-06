import LogoLarge from '../componentes/LogoLarge';
import style from './styles/Home.module.css'
import MenuH from './MenuH'

import { useState } from 'react';
import Mesa from './components/Mesa';


function Home(){

    const [valor, setvalor] = useState(<LogoLarge/>)


    document.addEventListener('click', (e)=>{

        switch(e.target.id){

            case 'mesa':
                setvalor(<Mesa/>)
                break

            case 'producao':
                setvalor('producao')
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
            <MenuH/>
            <div>{valor}</div>
        </section>
    )
};

export default Home;