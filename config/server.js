/**
*	Este archivo es el encargado de hacer las rutas para las diferentes url que se van a estar mandando por get
*	o por post, según sea el caso, estara trabajando dentro de una funcion donde esta se podrá exportar
*	para su manejo en cualquier otro archivo js. En la cual se estara llamando al servidor de express.
*	@author Oscar, Cinthia
*	@version 0
*	@date Tuesday, August 4,  2015
*/

//librerias requeridas
///librerias requeridas
var express = require('express');
var exphbs = require('express-handlebars');
var handlebars = require('handlebars');
var app = express();
var url = require('url');
//con esta linea se carga el servidor
//var serv = require('./server');
var bodyParser = require('body-parser');
var puerto= 3000;

//las siguientes lineas, son para indicar donde se encuentran los archivos y con cual sera el que sea el principal
app.set('view engine', 'hbs');
//se agrega la ruta donde se debe de jalar la plantilla
app.engine('hbs', exphbs({ defaultLayout: __dirname + '/../apps/views/layouts/main.hbs'}) );
//configure views path
app.set('views', __dirname + '/../apps/views');
//paginas estaticas donde se encontraran los archivos externos al proyecto en este caso css, js, img, etc...
app.use(express.static( __dirname + '/../public'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies

var rutas = require('./router');
rutas.configura(app);

var iniciar = function()
{
	app.listen(puerto);
}

exports.iniciar = iniciar;
