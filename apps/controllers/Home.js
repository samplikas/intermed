/**
* 	En este archivo se atraparan los eventos de la plantilla home.handlebars, 
*	asi como también hara la función de recibir y enviar los datos del modelo,
*	hacía la vista. Se trabajara con una función que simulara como la clase de este
*	archivo y dentro de esta función es como se trabajara.
*	Dentro de los metodos iran las llamadas a los metodos o llamados de los modelos y el envio de los parametros 
*	@author Oscar, Cinthia.
*	@version 0.0.0.0
*/
//librerias que se utilizaran en este archivo
module.exports = {
	sayHello: function(object, req, res) {
		//console.log("Esto es un arreglo "+ object);
		res.render('home', {arreglo: object}, function(err, html){ res.send(html)});
		//if(next) next();	
	},
	sayBye: function(req, res ) {
		console.log("Bye");	
		//if(next) next();
	},
	prueba: function( req, res){
		console.log("Prueba");
		//if(next) next();
	}
}