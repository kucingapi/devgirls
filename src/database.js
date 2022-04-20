const Sequelize = require('sequelize');

const dotenv = require('dotenv');
const acara = require('./entities/models/acara');
const anggota = require('./entities/models/anggota');
const artikel = require('./entities/models/artikel');
const pendaftar = require('./entities/models/pendaftar');
const kategori = require('./entities/models/kategori');

const model = [acara, artikel, anggota, pendaftar, kategori];

const env = dotenv.config().parsed;
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = env;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
});

model.forEach((item) => {
  item(sequelize, Sequelize.DataTypes, Sequelize.Deferrable);
});

module.exports = { sequelize, Sequelize };
