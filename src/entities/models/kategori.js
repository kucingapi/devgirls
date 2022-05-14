module.exports = (DataTypes) => ({
  label: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});
