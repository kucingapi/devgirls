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
      pembuatArtikel: {
        model: 'anggota',
        key: 'id',
        type: DataTypes.INTEGER,
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
        allowNull: false,
      },
      judulArtikel: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [3, 255],
        }
      },
      deskripsiArtikel: {
        type: DataTypes.TEXT,
        validate:{
          len: [10, 255],
        },
        allowNull: false,
      },
      fotoArtikel: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: 'Artikel',
      modelName: 'Artikel',
    }
  );
  return Acara;
};
