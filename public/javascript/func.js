//var fs =  require('fs')

var dados = [
    {item0:7.89},
    {item1:14.89},
    {item2:100.89},
    {item3:20.19}
    ]

var valor = 0;
var total = 0;
var men = 7.89;
//ar path = __dirname+'/nunpedido.txt';


function retorno (){
    
    //var x = fs.readFileSync(path, 'utf-8');

    switch(valor){
        case 0:
            men = 0
            men = dados[0].item0;
            break

        case 1:
            men = 0 
            men = dados[1].item1
            break

        case 2:
            men = 0 
            men = dados[2].item2
            break

        case 3:
            men = 0
            men = dados[3].item3
            break

    };
}


function mais(){

    //var path = '/nunpedido.txt';

   // if (fs.existsSync(path)){
     //   var x = fs.readFileSync(path, 'utf-8');
      //  men = x
    //};

    var dado = document.getElementById('qnt');
    var vtotal = document.getElementById('prec');

    valor++;

    dado.innerHTML =`<input id="quant" name="valor" value="${valor}">` ;


    total = total + men

    if(total < 10){
        vtotal.innerHTML = `<input id="preco" name="preco" value="${total}">`
        // vtotal.innerHTML = `
        // <p id="preco" >R$ <span id="tm">${total.toString()[0]}</span><span id="tn">${total.toString()[1]+total.toString()[2]+total.toString()[3]}</span></p>`

    }else{
        if(total < 100){
            vtotal.innerHTML = `<input id="preco" name="preco" value="${total}">`
            // vtotal.innerHTML = `
            // <p id="preco" >R$ <span id="tm">${total.toString()[0]+total.toString()[1]}</span><span id="tn">${total.toString()[2]+total.toString()[3]+total.toString()[4]}</span></p>`

        }else{
            vtotal.innerHTML = `<input id="preco" name="preco" value="${total}">`

            // vtotal.innerHTML = `
            // <p id="preco" >R$ <span id="tm">${total.toString()[0]+total.toString()[1]+total.toString()[2]}</span><span id="tn">${total.toString()[3]+total.toString()[4]+total.toString()[5]}</span></p>`
        };
    };
};

function menos(){

    var dado = document.getElementById('qnt');
    var vtotal = document.getElementById('prec');

    valor--;
    //dado.innerText = valor

    dado.innerHTML =`<input id="quant" name="valor" value="${valor}">` ;

    total = total - men


    if (valor < 0){

        valor = 0
        dado.innerText = valor

        vtotal.innerHTML = `<input id="preco" name="preco" value="${total}">`

        // vtotal.innerHTML= `<p id="preco" >R$ <strong id="tm">0</strong><strong id="tn">.00</strong></p>`

    }else{
        if(valor == 0){

        vtotal.innerHTML = `<input id="preco" name="preco" value="${total}">`

        // dado.innerText = valor
        // vtotal.innerHTML= `<p id="preco" >R$ <strong id="tm">0</strong><strong id="tn">.00</strong></p>`
        };
    };


    if (total != 0 & total < 10){


        vtotal.innerHTML = `<input id="preco" name="preco" value="${total}">`

        // vtotal.innerHTML = `
        // <p id="preco" >R$ <span id="tm">${total.toString()[0]}</span><span id="tn">${total.toString()[1]+total.toString()[2]+total.toString()[3]}</span></p>`
    };
    if(total > 10 & total < 100){

        vtotal.innerHTML = `<input id="preco" name="preco" value="${total}">`

        // vtotal.innerHTML = `
        // <p id="preco" >R$ <span id="tm">${total.toString()[0]+total.toString()[1]}</span><span id="tn">${total.toString()[2]+total.toString()[3]+total.toString()[4]}</span></p>`
    }else{

        vtotal.innerHTML = `<input id="preco" name="preco" value="${total}">`

        // vtotal.innerHTML = `
        // <p id="preco" >R$ <span id="tm">${total.toString()[0]+total.toString()[1]+total.toString()[2]}</span><span id="tn">${total.toString()[3]+total.toString()[4]+total.toString()[5]}</span></p>`
    }


    
};

