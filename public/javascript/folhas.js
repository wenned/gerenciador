var setDB = []

function MostraItens(){

    let itenOne = document.getElementById("ItensOne")

    itenOne.style.display = 'none';

}

function AddIten(x){

    setDB.push({'iten':x, 'qnt':'', 'valor':''})
    localStorage.setItem('size', JSON.stringify(setDB))

    PriceItems()
}

function AddItenQT(){

    let addvalor = document.getElementById('valor')
    itensDB = JSON.parse(localStorage.getItem('size'))

    var iteM, Item;
    itensDB.forEach((iten, indice) => {

        if (itensDB[indice]['qnt'] == ''){

            iteM = itensDB[indice]['iten']
            Item = indice
            setDB[indice]['qnt'] = addvalor.value

        }else{
            console.log('ecolha novo item')
        }
    });

    AddPrice(iteM, Item)
}

function AddPrice(x,y){


    itensDB = JSON.parse(localStorage.getItem('price'))

    itensDB.forEach((i,ind)=>{
        setDB[y]['valor'] = i[`${x}`]
        localStorage.setItem('size', JSON.stringify(setDB))

    })



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
        creatElement(iten['iten'], iten['qnt'], iten['valor'], indice)
    })

    apagar()
}

function creatElement (IteN,Qnt, Valor, indc){

    const tabela = document.getElementById('none')
    const valortabela = document.createElement('p')

    valortabela.innerText = `${indc} - ${Qnt} -- ${IteN} -- ${Valor}`
    
    tabela.appendChild(valortabela)

}

function AlterPedido(){

    localStorage.setItem('size', JSON.stringify(setDB))

    const alterar = document.getElementById('pop')
    var child = document.getElementById('alt')
    alterar.removeChild(child)

    PriceItems()    
}

function PriceItems(){
    fetch("http://192.168.31.3:8080/")
    .then((response)=>{
        return response.json()
    }).then((jsonBody) =>{
        localStorage.setItem('price', JSON.stringify([jsonBody]))
    })
}