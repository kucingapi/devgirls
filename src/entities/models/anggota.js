module.exports = (DataTypes) => ({
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
});
