const { deleteArtikel } = require('../../data-access/artikel.db');
const { UseCaseError } = require('../../entities/error');
const {
  removeArtikelValidation,
} = require('../../validation/artikel.validation');
const validate = require('../../validation/validate');

const makeRemoveArtikel = () => {
  return async function removeArtikel({ body }) {
    validate(removeArtikelValidation, body);
    const { id } = body;
    const deleted = await deleteArtikel(id);
    if (deleted < 1) throw new UseCaseError(404, 'artikel is not found');
    return id;
  };
};

module.exports = makeRemoveArtikel;
