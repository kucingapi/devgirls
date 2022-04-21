'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes, Deferrable) => {
  class Acara extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Anggota, ArtikelKategori }) {
      this.belongsTo(Anggota, { foreignKey: 'pembuatArtikel', as: 'pembuat' });
      this.hasMany(ArtikelKategori, { foreignKey: 'idArtikel', as: 'artikelKategori' });
    }
  }
  Acara.init(
    {
      pembuatArtikel: {
        references: {
          model: 'anggota',
          key: 'id',
          deferrable: Deferrable.INITIALLY_IMMEDIATE,
        },
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      judulArtikel: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 255],
        },
      },
      deskripsiArtikel: {
        type: DataTypes.TEXT,
        validate: {
          len: [10, 255],
        },
        allowNull: false,
      },
      fotoArtikel: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: 'artikel',
      modelName: 'Artikel',
    }
  );
  return Acara;
};
