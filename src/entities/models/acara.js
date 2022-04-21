'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes, Deferrable) => {
  class Acara extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Anggota}) {
      this.belongsTo(Anggota, { foreignKey: 'pembuatAcara', as: 'pembuatAcara' });
    }
  }
  Acara.init(
    {
      pembuatAcara: {
        references: {
          model: "anggota",
          key: 'id',
          deferrable: Deferrable.INITIALLY_IMMEDIATE,
        },
        type: DataTypes.INTEGER,
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
      tableName: 'acara',
      modelName: 'Acara',
    }
  );
  return Acara;
};
