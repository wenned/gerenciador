export function adicionar_adicional(...args){

    const dado = JSON.parse(localStorage.getItem('Modelo'))

    for(var item=0; item < dado.Itens.length; item++){
        // console.log(dado.Itens[item])
        console.log(args)
    }
}