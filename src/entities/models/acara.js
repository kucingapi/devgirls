'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Acara extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Acara.init(
    {
      judulAcara: DataTypes.STRING,
      deskripsiAcara: DataTypes.STRING,
      fotoAcara: DataTypes.STRING,
      tanggalPendaftaran: DataTypes.DATE,
      tanggalAcara: DataTypes.DATE,
      poin: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: 'Acara',
      modelName: 'Acara',
    }
  );
  return Acara;
};
