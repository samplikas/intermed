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
	index: function(object, req, res) {
		var object = {}; //Eliminar al conectar con el modelo, solo se agrego con finalidades de simulación

		this.formatResponse( object, function (content){
			res.render('registro', {'tbody' : content}, function(err, html){ res.send(html)});
		});
	},
	registrar: function(object, req, res) {
		object = [object];
		this.formatResponse( object, function (content){
			res.render('registro', {'tbody' : content}, function(err, html){ res.send(html)});
		});
	},
	formatResponse: function (records, callback){
		var object = [ //Eliminar al conectar con el modelo, solo se agrego con finalidades de simulación
					{
						'nombre': 'Médico 1',
						'apellido': 'Apellido',
						'correo': 'Correo',
						'telefono': 'Teléfono',
						'calle': 'Calle', 
						'numero': 'Número',
						'calle1': 'Calle1',
						'calle2': 'Calle 2',
						'colonia': 'Colonia',
						'CP': 'CP',
						'ciudad': 'Ciudad',
						'estado': 'Estado',
						'especialidad': 'Especialidad'
					},
					{
						'nombre': 'Médico 2',
						'apellido': 'Apellido',
						'correo': 'Correo',
						'telefono': 'Teléfono',
						'calle': 'Calle', 
						'numero': 'Número',
						'calle1': 'Calle1',
						'calle2': 'Calle 2',
						'colonia': 'Colonia',
						'CP': 'CP',
						'ciudad': 'Ciudad',
						'estado': 'Estado',
						'especialidad': 'Especialidad'
					}
					];

		if (records.length>0){
			records = object.concat(records); 
		} else {
			records = object;
		}

		var medicosRegistrados = '';
		if(records.length > 0) {
			for(var i=0; record=records[i]; i++) {
				var record = records[i];
				var conjucion = 'y';
				if (record.calle2.toLowerCase().substring(0, 1) === 'i'){
					conjucion = 'e';
				}
				medicosRegistrados += '<tr><th scope=\"row\">' + (i+1) + '</th><td>' + record.nombre + ' ' + record.apellido + '</td><td>' + record.correo + '</td><td>' + record.telefono + '</td><td><address><strong>' + record.calle + ' #' + record.numero + '</strong><br>Entre ' + record.calle1 + ' ' + conjucion +' ' + record.calle2 + ' <br>' + record.colonia + ', CP:' + record.CP + '<br>' + record.ciudad + ', ' + record.estado + '<br></address></td><td>' + record.especialidad + '</td><td><button class=\"btn btn-info\"><span class=\"glyphicon glyphicon-pencil\"></span></button></td></tr>';
			}
		}
		callback(medicosRegistrados);
	}
}