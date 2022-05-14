const { addKategori, getKategori } = require('../use-cases/kategori');

const kategoriController = Object.freeze({
  addKategori: (httpRequest) => addKategori(httpRequest),
  getKategori: (httpRequest) => getKategori(httpRequest),
});

module.exports = kategoriController;
