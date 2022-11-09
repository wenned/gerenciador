const db = require('./link')


async function roots(x){
    var un = "select * from produtos where nome_prod='"+x+"';"
    await db.connect()
    await db.query(un, (err, res) => {
        if (err) {
            console.log(err.stack)
            db.end()
        } else {
            console.log(res.rows)
            db.end()
        }
    })
    
}


var dados = []

const { Console } = require('console');
const readline = require('readline');



function verificar(x){

    switch(parseInt(x)){
        case 1:
            dados[0] = 1;
            dados.push('valor: 7.90');
            dados.push('Descricao: Pastel Carne')
            break;

            case 2:
                dados[0] = 2;
                dados.push('valor: 7.90');
                dados.push('Descricao: Pastel Carne / Queijo')
                break;

        case 21:
            dados[0] = 21;
            dados.push('valor: 6.90');
            dados.push('Descricao: Pastel Frango')
            break;

            case 22:
                dados[0] = 22;
                dados.push('valor: 13.00');
                dados.push('Descricao: Pastel Frango / Queijo')
                break;
// =============================================================================
        case 31:
            dados[0] = 31;
            dados.push('valor: 5.00');
            dados.push('Descricao: Crep Suico Carne')
            break;

            case 32:
                dados[0] = 32;
                dados.push('valor: 5.00');
                dados.push('Descricao: Crep Suico Frango')
                break;

                case 33:
                    dados[0] = 33;
                    dados.push('valor: 5.00');
                    dados.push('Descricao: Crep Suico Queijo')
                    break;

                    case 34:
                        dados[0] = 34;
                        dados.push('valor: 5.00');
                        dados.push('Descricao: Crep Suico Pizza')
                        break;

                        case 35:
                            dados[0] = 35;
                            dados.push('valor: 5.00');
                            dados.push('Descricao: Crep Suico Frango / Catupiry')
                            break;

// =============================================================================
        case 41:
            dados[0] = 41;
            dados.push('valor: 15.00');
            dados.push('Descricao: Crep Frances Carne')
            break;
            case 42:
                dados[0] = 42;
                dados.push('valor: 15.00');
                dados.push('Descricao: Crep Frances Frango')
                break;
                case 43:
                    dados[0] = 43;
                    dados.push('valor: 15.00');
                    dados.push('Descricao: Crep Frances Pizza')
                    break;
                    case 44:
                        dados[0] = 44;
                        dados.push('valor: 15.00');
                        dados.push('Descricao: Crep Frances Frango / Catupiry')
                        break;

    };
    
};

const teclado = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('   ====== PASTELARIA SABOR MINEIRO ====== ')
console.log()
console.log('       Pastel Carne!   =======  [01]')
console.log('       Pastel Frango!  =======  [02]')
console.log('       Crep Suico!     =======  [03]')
console.log('       Crep frances!   =======  [04]')
console.log()
console.log('   ====================================== ')

teclado.question('  ===|| Digite um numero : ', (res) =>{

    switch(parseInt(res)){
        case 1:
            console.log()
            console.log('  ====== PASTELARIA SABOR MINEIRO ====== ')
            console.log();
            console.log('Pastel Carne [01]');
            console.log('Pastel Carne / Queijo [02]');
            console.log()
            teclado.question('Digite um numero: ', (ress) =>{

                verificar(ress)
                console.log(dados)
               
            });
            break;
        case 2:
            console.log()
            console.log('  ====== PASTELARIA SABOR MINEIRO ====== ')
            console.log();
            console.log('Pastel Frango [01]');
            console.log('Pastel Frango / Queijo [02]');
            console.log()
            teclado.question('Digite um numero: ', (ress) =>{

                verificar(res+ress)
                console.log(dados)
                
            });
            break;

        case 3:
            console.log()
            console.log('  ====== PASTELARIA SABOR MINEIRO ====== ')
            console.log();
            console.log('Crep Suico Carne [01]');
            console.log('Crep Suico Frango [02]');
            console.log('Crep Suico Queijo [03]');
            console.log('Crep Suico Pizza [04]');
            console.log('Crep Suico Frango / Catupiry [05]');
            console.log()
            teclado.question('Digite um numero: ', (ress) =>{

                verificar(res+ress)
                console.log(dados)
                
            });
            break;

        case 4:
            //1 codigo do frango
            // 2 codigo do catupiry

            console.log()
            console.log('  ====== PASTELARIA SABOR MINEIRO ====== ')
            console.log();
            console.log('Crep Frances Carne [01]');
            console.log('Crep Frances Frango [02]');
            console.log('Crep Frances Pizza [03]');
            console.log('Crep Frances Frango / Catupiry [04]');
            console.log()
            teclado.question('Digite um numero: ', (ress) =>{



                verificar(res+ress)
                console.log(dados)
                
            });
            break;

    };

});