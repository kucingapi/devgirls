'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kategori extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ArtikelKategori, AcaraKategori}) {
      this.hasMany(ArtikelKategori, { foreignKey: 'idKategori', as: 'artikelKategori' });
      this.hasMany(AcaraKategori, { foreignKey: 'idKategori', as: 'acaraKategori' });
    }
  }
  Kategori.init(
    {
      label: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'kategori',
      modelName: 'Kategori',
    }
  );
  return Kategori;
};
