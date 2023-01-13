var fs = require('fs'); 

var http = require('http');

var express = require('express'); 

var app = express();

var bodyParser = require('body-parser');

const path = require('path');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static(__dirname + '/public'));

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