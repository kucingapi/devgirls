const { addArtikel, removeArtikel } = require('../use-cases/artikel');

const artikelController = Object.freeze({
  addArtikel: (httpRequest) => addArtikel(httpRequest),
  removeArtikel: (httpRequest) => removeArtikel(httpRequest),
});

module.exports = artikelController;
