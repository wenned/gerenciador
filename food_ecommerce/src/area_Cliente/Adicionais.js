import style from './styles/Adicionais.module.css'


const Item = ['Queijo','Cheddar','Catupiry','Chocolate','Carne','Carne sol','Bacon','Frango','Azeitona','Goiabada','Palmito','Calabresa','Presunto','Canela',]

function Adicionais(props){

    function handleClick(mensagem){
        
        if(props.adicionar.length === 0){
            props.itemadicionAl(mensagem)
        }else{
            props.itemadicionAl(props.adicionar, mensagem)
        }
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