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
      idAnggota:{
        model:'anggota',
        key:'id',
        type: DataTypes.INTEGER,
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
        allowNull: false
      },
      idAcara:{
        model:'acara',
        key:'id',
        type: DataTypes.INTEGER,
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
        allowNull: false
      },
      tanggalJoin: {
        type: DataTypes.DATE,
        allowNull: false
      },
    },
    {
      sequelize,
      tableName: 'Pendaftar',
      modelName: 'Pendaftar',
    }
  );
  return Acara;
};
