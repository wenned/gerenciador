var fs = require('fs'); //MODULO

var http = require('http');

var express = require('express'); //MODULO

var app = express(); // iniciar a variavel EXPRESS

var bodyParser = require('body-parser');
const path = require('path');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static(__dirname + '/public'));

// Configuracoes com banco de dados: ======================

 //const db = require('./public/javascript/link')

// async function roots(){
//     await db.connect()
//     await db.query('create table mais()')
//     await db.query('drop table mais')
//     await db.end()

// ======================================================== 

var servidor = app.listen(8080, function(){
	var porta = servidor.address().port;
	console.log('Servior executandona porta %s', porta);
}); //Iniciando o serviço de servidor na porta 8080

//iniciando o conteudo da pagina dinanmicamente abaixo

app.get('/', urlencodedParser, function (req, res) {
	fs.readFile('index.html', function(erro, dad){

		
		console.log(req.body)
		console.log(req.query)
		console.log(req.params)
	





		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(dad);
		res.end();
	});
});

app.get('/ped02', function (req, res) {
	fs.readFile('ped02.html', function(erro, dad){

		if (req.query.nunpedido == 0){

			var x = req.query.nunpedido;
			var path = __dirname+'/nunpedido.txt';

			if (fs.existsSync(path)){
				fs.writeFileSync(path, x);
			}else{
				fs.writeFileSync(path, x);
			};
			
		}else{
			if (req.query.nunpedido == 1){
				
				var x = req.query.nunpedido;
				var path = __dirname+'/nunpedido.txt';

				if (fs.existsSync(path)){
					fs.writeFileSync(path, x);
				}else{
					fs.writeFileSync(path, x);
				};

			}else{
				if (req.query.nunpedido == 2){
					var x = req.query.nunpedido;
					var path = __dirname+'/nunpedido.txt';
	
					if (fs.existsSync(path)){
						fs.writeFileSync(path, x);
					}else{
						fs.writeFileSync(path, x);
					};

				}else{
					if (req.query.nunpedido == 3){
						var x = req.query.nunpedido;
						var path = __dirname+'/nunpedido.txt';
		
						if (fs.existsSync(path)){
							fs.writeFileSync(path, x);
						}else{
							fs.writeFileSync(path, x);
						};

					}
				}
			}
		};

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(dad);
		res.end();
	});

});