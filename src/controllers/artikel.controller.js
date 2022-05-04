const { addArtikel, removeArtikel, getArtikel, getArtikelById } = require('../use-cases/artikel');

const artikelController = Object.freeze({
  addArtikel: (httpRequest) => addArtikel(httpRequest),
  removeArtikel: (httpRequest) => removeArtikel(httpRequest),
  getArtikel: (httpRequest) => getArtikel(httpRequest),
  getArtikelById: (httpRequest) => getArtikelById(httpRequest),
});

module.exports = artikelController;
