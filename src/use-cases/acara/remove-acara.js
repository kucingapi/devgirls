const { deleteAcara } = require('../../data-access/acara.db');
const { UseCaseError } = require('../../entities/error');
const {
  removeArtikelValidation,
} = require('../../validation/artikel.validation');
const validate = require('../../validation/validate');

const makeRemoveAcara = () => {
  return async function removeAcara({ body }) {
    validate(removeArtikelValidation, body);
    const { id } = body;
    const deleted = await deleteAcara(id);
    if (deleted < 1) throw new UseCaseError(404, 'acara is not found');
    return id;
  };
};

module.exports = makeRemoveAcara;
