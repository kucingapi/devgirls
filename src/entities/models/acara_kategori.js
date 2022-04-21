'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes, Deferrable) => {
  class ArtikelKategori extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Acara, Kategori}) {
      this.belongsTo(Acara, { foreignKey: 'idAcara', as: 'acara' });
      this.belongsTo(Kategori, { foreignKey: 'idKategori', as: 'kategori' });
    }
  }
  ArtikelKategori.init(
    {
      idAcara: {
        references: {
          model: 'artikel',
          key: 'id',
          deferrable: Deferrable.INITIALLY_IMMEDIATE,
        },
        type: DataTypes.STRING,
        allowNull: false,
      },
      idKategori: {
        references: {
          model: 'kategori',
          key: 'id',
          deferrable: Deferrable.INITIALLY_IMMEDIATE,
        },
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'acara_kategori',
      modelName: 'AcaraKategori',
    }
  );
  return ArtikelKategori;
};
