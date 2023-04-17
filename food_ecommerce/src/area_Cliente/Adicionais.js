import style from './styles/Adicionais.module.css'


const Item = ['Queijo','Cheddar','Catupiry','Chocolate','Carne','Carne sol','Bacon','Frango','Azeitona','Goiabada','Palmito','Calabresa','Presunto','Canela',]

function Adicionais(props){

    function handleClick(mensagem){
        props.itemadicionAl(mensagem)
    }

    return (
        <section className={style.conteinerScroll}>
                {                    
                    Object.values(Item).map((mesa, index)=>(
                        <span key={index} onClick={()=>{handleClick(`${mesa}`)}} className={style.itensCarrosel}>{mesa}</span>
                    ))
                }
      </section>
    )
}

export default Adicionais;