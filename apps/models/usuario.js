"use strict";

module.exports = function(sequelize, DataTypes) {
  var Usuario = sequelize.define("Usuario", {
    id: {type : DataTypes.BIGINT, autoIncrement: true, primaryKey: true},
    usuario: {type : DataTypes.STRING },
    correo: {type : DataTypes.STRING },
    password: {type : DataTypes.STRING, allowNull: false, required: true},
    tipoUsuario: {type: DataTypes.STRING, required: true},
    tipoRegistro: {type: DataTypes.STRING, required: true},
    estatusActivacion: {type: DataTypes.STRING, required: true}
  }, {
    classMethods: {
      associate: function(models) {
        Usuario.hasOne(models.Medico);
        Usuario.hasOne(models.DatosGenerales);
        Usuario.hasOne(models.Direccion);
        Usuario.hasOne(models.Telefono);
      }
    },
   timestamps: false,
   paranoid: true,
   underscored: true,
   freezeTableName: true,
   tableName: 'usuarios'
  });

  return Usuario;
};
