module.exports = (DataTypes) => ({
  judulArtikel: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 255],
    },
  },
  deskripsiArtikel: {
    type: DataTypes.TEXT,

    allowNull: false,
  },
  fotoArtikel: DataTypes.STRING,
});
