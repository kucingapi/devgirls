const { sequelize, Sequelize } = require('../../database');
const acara = require('./acara');
const anggota = require('./anggota');
const artikel = require('./artikel');
const kategori = require('./kategori');

const Acara = sequelize.define('acara', acara(Sequelize.DataTypes));
const Anggota = sequelize.define('anggota', anggota(Sequelize.DataTypes));
const Artikel = sequelize.define('artikel', artikel(Sequelize.DataTypes));
const Kategori = sequelize.define('kategori', kategori(Sequelize.DataTypes));

Anggota.hasMany(Acara);
Acara.belongsTo(Anggota);

Anggota.hasMany(Artikel);
Artikel.belongsTo(Anggota);

Anggota.belongsToMany(Acara, {through: 'pendaftar'})
Acara.belongsToMany(Anggota, {through: 'pendaftar'})

Kategori.belongsToMany(Acara, {through: 'kategori_acara'})
Acara.belongsToMany(Kategori, {through: 'kategori_acara'})

Artikel.belongsToMany(Acara, {through: 'kategori_artikel'})
Acara.belongsToMany(Artikel, {through: 'kategori_artikel'})

module.exports = { sequelize, Sequelize };
