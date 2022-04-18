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
      judulAcara: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deskripsiAcara: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fotoAcara: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tanggalPendaftaran: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      tanggalAcara: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      poin: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'Acara',
      modelName: 'Acara',
    }
  );
  return Acara;
};
