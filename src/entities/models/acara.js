module.exports = (DataTypes) => ({
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
  waktuMulai: {
    type: DataTypes.TIME,
  },
  waktuBerakhir: {
    type: DataTypes.TIME,
  },
  tanggalAcara: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  poin: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  aktif: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});
