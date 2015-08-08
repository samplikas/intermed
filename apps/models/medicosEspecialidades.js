"use strict";

module.exports = function(sequelize, DataTypes) {
  var MedicoEspecialidad = sequelize.define("MedicoEspecialidad", {
    id: {type : DataTypes.BIGINT, autoIncrement: true, primaryKey: true},
    tipo: {type: DataTypes.STRING, required: true},
    titulo: {type: DataTypes.STRING, required: true},
    lugarestudio: {type:  DataTypes.STRING, required: true},
    fecha: {type:  DataTypes.DATE, required: true},
    medico_id: {type: DataTypes.BIGINT, required: true}
  }, {
    classMethods: {
      associate: function(models) {
    //    MedicoEspecialidad.hasOne(models.Medico);
    //    MedicoEspecialidad.hasOne(models.Especialidad);
      }
    },
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'medicosEspecialidades'
  });

  return MedicoEspecialidad;
};