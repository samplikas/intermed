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

var models  = require('../models');

module.exports = {
	index: function(object, req, res) {
		res.render('registro', {}, function(err, html){ res.send(html)});
	},
	registrar: function(object, req, res) {
		res.render('registro', object , function(err,html){ res.send(html)});
	}
}
