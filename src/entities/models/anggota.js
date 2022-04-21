'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anggota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Pendaftar, Artikel, Acara}) {
      this.hasMany(Pendaftar, { foreignKey: 'idAnggota', as: 'pendaftar' });
      this.hasMany(Artikel, { foreignKey: 'pembuatArtikel', as: 'artikel' });
      this.hasMany(Acara, { foreignKey: 'pembuatAcara', as: 'acara' });
    }
  }
  Anggota.init(
    {
      namaAnggota: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 255],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5, 255],
        },
      },
      jenisAnggota: {
        type: DataTypes.STRING,
        defaultValue: 'anggota',
        allowNull: false,
      },
      poin: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'anggota',
      modelName: 'Anggota',
    }
  );
  return Anggota;
};
