var fs = require('fs'); //MODULO

var http = require('http');

var express = require('express'); //MODULO

var app = express(); // iniciar a variavel EXPRESS

var bodyParser = require('body-parser');
const path = require('path');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static(__dirname + '/public'));




// Configuracoes com banco de dados: ======================

const db = require('./public/javascript/link');
const { notEqual } = require('assert');
const { json } = require('express');

async function updateValue(x){

    var un = "select * from produtos where nome_prod='"+x[0]+"';"

    await db.connect()
    await db.query(un, (err, res) => {
        if (err) {
            console.log(err.stack)
            db.end()

        } else {

			var quantidade = res.rows[0]['quantidade'];


			if (quantidade > 0){

				
				db.query(`update produtos set quantidade=${x[1]} where nome_prod='${x[0]}';`)
			db.end()};

        };
    });
    
};
// /==============================================================/ 


var servidor = app.listen(8080, function(){
	var porta = servidor.address().port;
	console.log('Servior executandona porta %s', porta);
}); 


app.get('/', urlencodedParser, function (req, res) {

	fs.readFile('index.html', function(erro, dad){

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(dad);
		res.end();
	});
});



app.get('/itens', function (req, res) {

	fs.readFile('itens.html', function(erro, dad){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(dad);
		res.end();
	});

});


app.get('/ped02', function (req, res) {
	fs.readFile('ped02.html', function(erro, dad){

		let nome = req.query.nome

		dad = dad.toString().replace('x1', nome)

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(dad);
		res.end();
	});

});


app.get('/final', urlencodedParser, function (req, res) {

	fs.readFile('final.html', function(erro, dad){

		var s = ['carne', 2]

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(dad);
		res.end();
	});
});