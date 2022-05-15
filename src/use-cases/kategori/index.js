const makeAddKategori = require('./add-kategori');
const makeAddKategoriAcara = require('./add-kategori-acara');
const makeAddKategoriArtikel = require('./add-kategori-artikel');
const makeGetKategori = require('./get-kategori');

const addKategori = makeAddKategori();
const getKategori = makeGetKategori();
const addKategoriAcara = makeAddKategoriAcara();
const addKategoriArtikel = makeAddKategoriArtikel();

const kategoriService = Object.freeze({
  addKategori,
  getKategori,
  addKategoriAcara,
  addKategoriArtikel,
});

module.exports = kategoriService;
module.exports = {
  addKategori,
  getKategori,
  addKategoriAcara,
  addKategoriArtikel,
};
