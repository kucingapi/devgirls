const makeAddArtikel = require('./add-artikel');
const { createArticle } = require('../../data-access/artikel.db');
const getPayloadJwt = require('../../functions/getPayloadJwt');
const validate = require('../../validation/validate');
const makeRemoveArtikel = require('./remove-artikel');
const { addArtikelValidation } = require('../../validation/artikel.validation');

const addArtikel = makeAddArtikel(
  createArticle,
  getPayloadJwt,
  addArtikelValidation,
  validate
);
const removeArtikel = makeRemoveArtikel();

const artikelService = Object.freeze({ addArtikel, removeArtikel });

module.exports = artikelService;
module.exports = { addArtikel, removeArtikel };
