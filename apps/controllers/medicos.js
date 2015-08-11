var models  = require('../models');

/**
Controlador de para médicos
*	@author Ivan Salcedo
*	@version 0.0.0.0
*/

module.exports = {
// Prueba mandar por ajax registros de sequelize
  ajax: function(object, req, res){
    models.Medico.findAll().then(function(datos) {
      res.send(datos);
    });
  },
  // Método que muesta la pantalla de registro
  registro: function(object, req, res) {
		//Obteniendo estados
  	  models.Estado.findAll().then(function(estados) {
  			// Obteniendo especialidades
  			models.Especialidad.findAll().then(function(especialidades) {
          // Obteniendo médicos
          models.Usuario.findAll({
            include: [{ model: models.DatosGenerales },
              { model: models.Medico },
              { model: models.Direccion},
              { model: models.Telefono},
            ]}
          ).then(function(medicos) {
      				//Rendereando index y pasando los registros a la vista
        		  res.render('medicos/registro', {
        		    estados: estados,
        				especialidades : especialidades,
                medicos: medicos
        			});
          });
  		});
  	});
  },
  // Método que guarda médicos y muestra de nuevo la pantalla
  registrar: function(object, req, res) {
    res.redirect('/registro');
  }
}
