const { addArtikel } = require("../use-cases/artikel");

const artikelController = Object.freeze({
  addArtikel: (httpRequest) => addArtikel(httpRequest),
});

module.exports = artikelController;
