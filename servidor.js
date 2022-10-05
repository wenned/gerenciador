var fs = require('fs'); //MODULO

var http = require('http');


var express = require('express'); //MODULO
var app = express(); // iniciar a variavel EXPRESS

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static(__dirname + '/public'));


var servidor = app.listen(8080, function(){
	var porta = servidor.address().port;
	console.log('Servior executandona porta %s', porta);
}); //Iniciando o serviço de servidor na porta 8080

//iniciando o conteudo da pagina dinanmicamente abaixo
app.get('/', function (req, res) {
	fs.readFile('index.html', function(erro, dad){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(dad);
		res.end();
	});
});

app.get('/pedido', function (req, res) {
	fs.readFile('pedido.html', function(erro, dad){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(dad);
		res.end();
	});
});
