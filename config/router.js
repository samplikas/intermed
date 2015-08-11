

//llamado de la clase con la que se podra cargar los controladores
var intermed = require('../apps/controllers/intermed');
/**
*	function encargada de tener listo todo
*	@author oscar
*/
var configura = function(app)
{
	//Home
	app.get('/', function( req, res ){ intermed.callController('home', 'index', object, req, res) });

	//Registro
	app.get('/registro', function( req, res ){
		//variables = JSON.stringify(req.body);
		//console.log(variables);
		intermed.callController('medicos', 'registro', object, req, res)
	});

	app.post('/registrar', function( req, res ){
/*
		var object = {
						'Nombre': req.body.nombreMed,
						'Apellido': req.body.apellidoMed,
						'Correo': req.body.correoMed,
						'Telefono': req.body.telefonoMed,
						'Calle': req.body.calleMed,
						'Numero': req.body.numeroMed,
						'calle1': req.body.calle1Med,
						'calle2': req.body.calle2Med,
						'Colonia': req.body.coloniaMed,
						'CP': req.body.cpMed,
						'Ciudad': req.body.ciudadMed,
						'Estado': req.body.estadoMed,
						'Especialidad': req.body.especialidadMed
					};*/
		intermed.callController('medicos', 'registrar', JSON.stringify(req.body), req,  res)
	});
}

//se exporta para que otro js lo pueda utilizar
exports.configura = configura;
