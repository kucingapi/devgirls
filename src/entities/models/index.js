const { sequelize, Sequelize } = require('../../database');
const acara = require('./acara');
const anggota = require('./anggota');

const Acara = sequelize.define('acara', acara(Sequelize.DataTypes));
const Anggota = sequelize.define('anggota', anggota(Sequelize.DataTypes));

Anggota.hasMany(Acara);
Acara.belongsTo(Anggota);

module.exports = { sequelize, Sequelize };
