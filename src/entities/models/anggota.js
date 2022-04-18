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
      namaAnggota: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      jenisAnggota: {
        type: DataTypes.STRING,
        defaultValue: 'anggota',
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'Anggota',
      modelName: 'Anggota',
    }
  );
  return Anggota;
};
