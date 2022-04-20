'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes, Deferrable) => {
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
      pembuatAcara: {
        model: 'anggota',
        key: 'id',
        type: DataTypes.INTEGER,
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
        allowNull: false,
      },
      judulAcara: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 255],
        },
      },
      deskripsiAcara: {
        type: DataTypes.TEXT,
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
