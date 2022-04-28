const { createArtikel } = require("../use-cases/artikel");

const anggotaController = Object.freeze({
  createArticle: (httpRequest) => createArtikel(httpRequest),
});

module.exports = anggotaController;
