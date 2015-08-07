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
var serv = require('./server');

//las siguientes lineas, son para indicar donde se encuentran los archivos y con cual sera el que sea el principal
app.set('view engine', 'hbs');
//se agrega la ruta donde se debe de jalar la plantilla
app.engine('hbs', exphbs({ defaultLayout: __dirname + '/../apps/views/layouts/main.hbs'}) );
//configure views path
app.set('views', __dirname + '/../apps/views');
//paginas estaticas donde se encontraran los archivos externos al proyecto en este caso css, js, img, etc...
app.use(express.static( __dirname + '/../public'));

//llamado de la clase con la que se podra cargar los controladores
var intermed = require('../apps/controllers/intermed');
var object = ["tacos","tortas","ahogadas"];//Esto es lo que se recibe de la vista para el envio de controlador 
/**
*	function encargada de tener listo todo 
*	@author oscar
*/
var iniciar = function()
{
	//route
	app.get('/', function( req, res ){ intermed.callController('Home', 'sayHello', object, res) });
}
serv.server(app, 3000);

//se exporta para que otro js lo pueda utilizar
exports.iniciar = iniciar;