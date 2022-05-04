const {
  addArtikel,
  removeArtikel,
  getArtikel,
  getArtikelById,
  updateArtikel,
} = require('../use-cases/artikel');

const artikelController = Object.freeze({
  addArtikel: (httpRequest) => addArtikel(httpRequest),
  removeArtikel: (httpRequest) => removeArtikel(httpRequest),
  getArtikel: (httpRequest) => getArtikel(httpRequest),
  getArtikelById: (httpRequest) => getArtikelById(httpRequest),
  updateArtikel: (httpRequest) => updateArtikel(httpRequest),
});

module.exports = artikelController;
