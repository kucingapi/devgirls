const makeAddKategori = require('./add-kategori');
const makeAddKategoriAcara = require('./add-kategori-acara');
const makeGetKategori = require('./get-kategori');

const addKategori = makeAddKategori();
const getKategori = makeGetKategori();
const addKategoriAcara = makeAddKategoriAcara();

const kategoriService = Object.freeze({
  addKategori,
  getKategori,
  addKategoriAcara,
});

module.exports = kategoriService;
module.exports = { addKategori, getKategori, addKategoriAcara };
