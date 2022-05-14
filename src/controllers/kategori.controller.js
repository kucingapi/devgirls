const { addKategori } = require('../use-cases/kategori');

const kategoriController = Object.freeze({
  addKategori: (httpRequest) => addKategori(httpRequest),
});

module.exports = kategoriController;
