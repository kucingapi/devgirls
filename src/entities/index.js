const acara = require('./models/acara');
const artikel = require('./models/artikel');
const anggota = require('./models/anggota');
const pendaftar = require('./models/pendaftar');
const { sequelize, Sequelize } = require('../database');
const kategori = require('./models/kategori');

const model = { acara, artikel, anggota, pendaftar, kategori };

for (var key in model) {
  const item = model[key];
  model[key] = item(sequelize, Sequelize.DataTypes, Sequelize.Deferrable);
}

model.anggota.belongsToMany(model.acara, { through: 'cara' });
model.acara.belongsToMany(model.anggota, { through: 'cara' });

module.exports = model;
