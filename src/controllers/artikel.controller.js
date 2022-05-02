const { addArtikel, removeArtikel, getArtikel } = require('../use-cases/artikel');

const artikelController = Object.freeze({
  addArtikel: (httpRequest) => addArtikel(httpRequest),
  removeArtikel: (httpRequest) => removeArtikel(httpRequest),
  getArtikel: (httpRequest) => getArtikel(httpRequest),
});

module.exports = artikelController;
