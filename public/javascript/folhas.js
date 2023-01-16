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

        }
    });

    AddPrice(iteM, Item)
}

function AddPrice(x,y){

    itensDB = JSON.parse(localStorage.getItem('price'))

    setDB[y]['valor'] = itensDB[x]
    localStorage.setItem('size', JSON.stringify(setDB))

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

    localStorage.clear()

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

    var xhr = new XMLHttpRequest();

    xhr.responseType = "json"
    xhr.onreadystatechange = ()=>{
        if (xhr.readyState == 4 && xhr.status == 200){

            localStorage.setItem('price', JSON.stringify(xhr.response))
        }
    };

    xhr.open("GET", "http://192.168.31.3:8080/");
    xhr.send();
}