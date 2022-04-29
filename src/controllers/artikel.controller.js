const { createArtikel } = require("../use-cases/artikel");

const artikelController = Object.freeze({
  createArtikel: (httpRequest) => createArtikel(httpRequest),
});

module.exports = artikelController;
