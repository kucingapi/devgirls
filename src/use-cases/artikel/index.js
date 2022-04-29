const makeAddArtikel = require("./add-artikel");
const { createArticle } = require('../../data-access/artikel.db');
const getPayloadJwt = require('../../functions/getPayloadJwt');
const {
  createArtikelValidation,
} = require('../../validation/anggota.validation');
const validate = require('../../validation/validate');
const makeRemoveArtikel = require("./remove-artikel");


const addArtikel = makeAddArtikel(createArticle, getPayloadJwt, createArtikelValidation, validate);
const removeArtikel = makeRemoveArtikel();

const artikelService = Object.freeze({ addArtikel, removeArtikel });

module.exports = artikelService
module.exports = { addArtikel, removeArtikel };