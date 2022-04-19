const acara = require('./models/acara');
const artikel = require('./models/artikel');
const anggota = require('./models/anggota');
const pendaftar = require('./models/pendaftar');
const { sequelize, Sequelize } = require('../database');

const model = {acara, artikel, anggota, pendaftar};

for(var key in model){
  const item = model[key];
  model[key] = item(sequelize, Sequelize.DataTypes, Sequelize.Deferrable);
}

module.exports = model;