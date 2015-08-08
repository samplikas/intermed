var models  = require('../models');

exports.ajax = function(req, res) {
  models.Medico.findAll().then(function(datos) {
    res.send(datos);
  });
};

exports.index = function(req, res) {
  res.render('medicos/index', {
    title: 'Medicos'
  });
};

exports.mostrar = function(req, res) {
  models.Paciente.findAll().then(function(datos) {
    res.render('medicos/mostrar', {
      title: 'Medicos',
      datos: datos
    });
  });
};

exports.datos = function(req, res) {
  models.Paciente.findAll().then(function(datos) {
    res.render('medicos/mostrar', {
      title: 'Medicos',
      datos: datos
    });
  });
};
