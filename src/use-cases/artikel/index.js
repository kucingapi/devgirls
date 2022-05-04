const makeAddArtikel = require('./add-artikel');
const {
  createArticle,
  changeArtikel,
} = require('../../data-access/artikel.db');
const getPayloadJwt = require('../../functions/getPayloadJwt');
const validate = require('../../validation/validate');
const makeRemoveArtikel = require('./remove-artikel');
const { getAllArtikel } = require('../../data-access/artikel.db');
const { findArtikelById } = require('../../data-access/artikel.db');
const {
  getArtikelByIdValidation,
  updateArtikelValidation,
} = require('../../validation/artikel.validation');
const { addArtikelValidation } = require('../../validation/artikel.validation');
const { deleteArtikel } = require('../../data-access/artikel.db');
const { UseCaseError } = require('../../entities/error');
const {
  removeArtikelValidation,
} = require('../../validation/artikel.validation');
const makeGetArtikel = require('./get-artikel');
const makeGetArtikelById = require('./get-artikel-by-id');
const makeUpdateArtikel = require('./update-artikel');

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

const getArtikel = makeGetArtikel(getAllArtikel, UseCaseError);

const getArtikelById = makeGetArtikelById(
  findArtikelById,
  getArtikelByIdValidation,
  validate,
  UseCaseError
);

const updateArtikel = makeUpdateArtikel(
  changeArtikel,
  findArtikelById,
  getArtikelByIdValidation,
  updateArtikelValidation,
  validate
);

const artikelService = Object.freeze({
  addArtikel,
  removeArtikel,
  getArtikel,
  getArtikelById,
  updateArtikel,
});

module.exports = artikelService;
module.exports = {
  addArtikel,
  removeArtikel,
  getArtikel,
  getArtikelById,
  updateArtikel,
};
