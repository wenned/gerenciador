var valor = 0;
var total = 3.89;
var men = 3.89;


function mais(){
    var dado = document.getElementById('valor');
    var vtotal = document.getElementById('prec')

    valor++;
    dado.innerText = valor;

    total = valor + total

    if(total < 10){
        vtotal.innerHTML = `
        <p id="preco" >R$ <span id="tm">${total.toString()[0]}</span><span id="tn">${total.toString()[1]+total.toString()[2]+total.toString()[3]}</span></p>`
    }else{
        if(total < 100){
            vtotal.innerHTML = `
            <p id="preco" >R$ <span id="tm">${total.toString()[0]+total.toString()[1]}</span><span id="tn">${total.toString()[2]+total.toString()[3]+total.toString()[4]}</span></p>`

        }else{
            vtotal.innerHTML = `
            <p id="preco" >R$ <span id="tm">${total.toString()[0]+total.toString()[1]+total.toString()[2]}</span><span id="tn">${total.toString()[3]+total.toString()[4]+total.toString()[5]}</span></p>`
        };
    };
};

function menos(){
    var dado = document.getElementById('valor');
    var vtotal = document.getElementById('prec');

    valor--;
    dado.innerText = valor

    total = total - men


    if (valor < 0){
        valor = 0
        dado.innerText = valor
        vtotal.innerHTML= `<p id="preco" >R$ <strong id="tm">0</strong><strong id="tn">.00</strong></p>`

    }else{
        if(valor == 0){
        dado.innerText = valor
        vtotal.innerHTML= `<p id="preco" >R$ <strong id="tm">0</strong><strong id="tn">.00</strong></p>`
        };
    };


    if (total != 0 & total < 10){
        vtotal.innerHTML = `
        <p id="preco" >R$ <span id="tm">${total.toString()[0]}</span><span id="tn">${total.toString()[1]+total.toString()[2]+total.toString()[3]}</span></p>`
    };
    if(total > 10 & total < 100){
        vtotal.innerHTML = `
        <p id="preco" >R$ <span id="tm">${total.toString()[0]+total.toString()[1]}</span><span id="tn">${total.toString()[2]+total.toString()[3]+total.toString()[4]}</span></p>`
    }else{
        vtotal.innerHTML = `
        <p id="preco" >R$ <span id="tm">${total.toString()[0]+total.toString()[1]+total.toString()[2]}</span><span id="tn">${total.toString()[3]+total.toString()[4]+total.toString()[5]}</span></p>`
    }



};

