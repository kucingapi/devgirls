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
const makeGetArtikelById = require('./get-artikel-by-id');

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
const getArtikelById = makeGetArtikelById();

const artikelService = Object.freeze({ addArtikel, removeArtikel, getArtikel, getArtikelById });

module.exports = artikelService;
module.exports = { addArtikel, removeArtikel, getArtikel, getArtikelById };
