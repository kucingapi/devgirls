const makeCreateArtikel = require("./create-artikel");

const createArtikel = makeCreateArtikel();

const artikelService = Object.freeze({ createArtikel });

module.exports = artikelService
module.exports = { createArtikel };