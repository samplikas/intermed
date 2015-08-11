// Importando modelos
var models  = require('../models');

/**
Controlador de para home
*	@author Cinthia, Oscar, Ivan
*	@version 0.0.0.0
*/
//librerias que se utilizaran en este archivo
module.exports = {

	// Método que muestra pantalla inicial del sitio
	index: function(object, req, res){
		//Obteniendo estados
	  models.Estado.findAll().then(function(datos) {
			// Obteniendo especialidades
			models.Especialidad.findAll().then(function(especialidades) {
				//Rendereando index y pasando los registros a la vista
		  res.render('home/index', {
		    estados: datos,
				especialidades : especialidades
			});
		});
	});

}

}
