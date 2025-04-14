const itensRemover = ['temp', 'Modelo', 'menu_bebidas', 'menu_frances', 'menu_pasteis', 'menu_suicos', 'Key', 'Pedido']

export function removerItensArmazenado(){
    
    for(var y=0; y < itensRemover.length; y++){
        localStorage.removeItem(itensRemover[y])
    }

};
