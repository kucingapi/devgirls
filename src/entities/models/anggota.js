'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anggota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Anggota.init(
    {
      namaAnggota: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      jenisAnggota: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Anggota',
    }
  );
  return Anggota;
};
