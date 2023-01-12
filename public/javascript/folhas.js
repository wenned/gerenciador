var setDB = []

function MostraItens(){

    let itenOne = document.getElementById("ItensOne")

    itenOne.style.display = 'none';

}

function AddIten(x){

    setDB.push({'iten':x, 'qnt':''})
    localStorage.setItem('size', JSON.stringify(setDB))

}

function AddItenQT(){

    let addvalor = document.getElementById('valor')

    itensDB = JSON.parse(localStorage.getItem('size'))

    itensDB.forEach((iten, indice) => {

        if (itensDB[indice]['qnt'] == ''){
            setDB[indice]['qnt'] = addvalor.value
            localStorage.setItem('size', JSON.stringify(setDB))

        }
    });

}

function gerartabelaitens(){

    itensDB = JSON.parse(localStorage.getItem('size'))

    setDB = itensDB

    setDB.forEach((iten, indice) => {
        creatElement(iten['iten'], iten['qnt'])
    })



    // const keys = Object.keys(localStorage)
    // const valores = Object.values(localStorage)

    // for (size = 0; size < keys.length; size++){

    //     const conteudo = `${valores[size]} --  ${keys[size]} -- \n'$ 7,79'`


    //     creatElement(conteudo)
    // }

    // apagar()
}

function apagar(){
    localStorage.clear()
}

function creatElement (x,y){

    const tabela = document.getElementById('none')

    const valortabela = document.createElement('p')

    valortabela.innerText = `${x},${y}`

    tabela.appendChild(valortabela)

}




function Popup(){

    const valoItensDesc = document.getElementById('itens') 

    const alterar = document.getElementById('pop')

    const keys = Object.keys(localStorage)
    const valores = Object.values(localStorage)

    alterar.innerHTML = `
    
    <div class="pop">
    <h1>Pastelaria Sabor Mineiro</h1>
    <br>
    <p>Pedido numero 7</p>
    <br>
    <p>itens -- </p>
    <br>
    <p>Quant. -- Descricao -- valor</p>
    <div id="itens">
    ${dice}
    </div>



    <form action="#" method="post">
        <input type="hidden">
        <button type="submit">Enviar Pedido</button>
    </form>

    </div>
    `


}