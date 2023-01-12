var fs = require('fs'); 

var http = require('http');

var express = require('express'); 

var app = express();

var bodyParser = require('body-parser');

const path = require('path');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static(__dirname + '/public'));


// Configuracoes com banco de dados: ======================

const db = require('./public/javascript/conect.js');
const { notEqual } = require('assert');
const { json, query } = require('express');
const { Console } = require('console');


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

app.get('/final', urlencodedParser, function (req, res) {

	fs.readFile('final.html', function(erro, dad){


		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(dad);
		res.end();
	});

});