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

function apagar(){
    localStorage.clear()
}

function Popup(){

    const alterar = document.getElementById('pop')

    alterar.innerHTML = `
    
    <div id="alt">
    <h1>Pastelaria Sabor Mineiro</h1>
    <p>Pedido numero 7</p>
    <p>itens -- </p>
    <p>-- Quant. -- Descricao -- valor</p>

    <div id="none"></div>
    <br>
    <form action="#" method="post">
        <input type="hidden">
        <button type="submit">Enviar Pedido</button>
    </form>
    <button onclick="AlterPedido()">Alterar Pedido</button>

    </div>
    `
    gerartabelaitens()

}

function gerartabelaitens(){

    itensDB = JSON.parse(localStorage.getItem('size'))

    setDB = itensDB

    setDB.forEach((iten, indice) => {
        creatElement(iten['iten'], iten['qnt'], indice)
    })

    apagar()
}

function creatElement (IteN,Qnt, indc){

    const tabela = document.getElementById('none')
    const valortabela = document.createElement('p')

    valortabela.innerText = `${indc} - ${Qnt} -- ${IteN} --`
    
    tabela.appendChild(valortabela)

}

function AlterPedido(){

    localStorage.setItem('size', JSON.stringify(setDB))

    const alterar = document.getElementById('pop')
    var child = document.getElementById('alt')
    alterar.removeChild(child)
    
}