const makeAddArtikel = require("./create-artikel");

const addArtikel = makeAddArtikel();

const artikelService = Object.freeze({ addArtikel });

module.exports = artikelService
module.exports = { addArtikel };