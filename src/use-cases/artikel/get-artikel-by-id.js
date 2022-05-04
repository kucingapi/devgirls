const {
  getAllArtikel,
  findArtikelById,
} = require('../../data-access/artikel.db');
const { UseCaseError } = require('../../entities/error');
const {
  getArtikelByIdValidation,
} = require('../../validation/artikel.validation');
const validate = require('../../validation/validate');

const makeGetArtikelById = () => {
  return async function getArtikelById({ params }) {
    validate(getArtikelByIdValidation, params);
    const { id } = params;

    const artikel = await findArtikelById(id).catch((e) => {
      throw new UseCaseError(500, 'database error', ...e);
    });
    if (artikel === null) {
      throw new UseCaseError(404, 'aritikel not found');
    }
    return artikel;
  };
};

module.exports = makeGetArtikelById;
