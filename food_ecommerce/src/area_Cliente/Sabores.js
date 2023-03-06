import { useState} from 'react';
import Logo from '../componentes/Logo';

function Sabores(){

    const [valor, setValor] = useState('');

    document.addEventListener('click', (e)=>{


        switch(e.target.id){

            case 'pastel':
                setValor(<Logo/>)
                break

            case 'frances':
                break
            case ' suico':
                break
            case 'hamburge':
                break
            case 'bebida':
                break
            default:
                break
        }

    })

    return (
        <>{valor}</>
    )

};

export default Sabores;