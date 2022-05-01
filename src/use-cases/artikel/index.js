const makeAddArtikel = require('./add-artikel');
const { createArticle } = require('../../data-access/artikel.db');
const getPayloadJwt = require('../../functions/getPayloadJwt');
const validate = require('../../validation/validate');
const makeRemoveArtikel = require('./remove-artikel');
const { addArtikelValidation } = require('../../validation/artikel.validation');
const { deleteArtikel } = require('../../data-access/artikel.db');
const { UseCaseError } = require('../../entities/error');
const {
  removeArtikelValidation,
} = require('../../validation/artikel.validation');
const makeGetArtikel = require('./get-artikel');

const addArtikel = makeAddArtikel(
  createArticle,
  getPayloadJwt,
  addArtikelValidation,
  validate
);

const removeArtikel = makeRemoveArtikel(
  deleteArtikel,
  UseCaseError,
  removeArtikelValidation,
  validate
);

const getArtikel = makeGetArtikel();

const artikelService = Object.freeze({ addArtikel, removeArtikel, getArtikel });

module.exports = artikelService;
module.exports = { addArtikel, removeArtikel, getArtikel };
