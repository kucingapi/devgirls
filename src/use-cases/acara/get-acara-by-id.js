const { findAcaraById } = require('../../data-access/acara.db');
const { sequelizeErrorHandler, UseCaseError } = require('../../entities/error');
const { getAcaraByIdValidation } = require('../../validation/acara.validation');
const validate = require('../../validation/validate');

const makeGetAcaraById = () => {
  return async function getAcaraById({ params }) {
    validate(getAcaraByIdValidation, params);
    const { id } = params;

    const artikel = await findAcaraById(id).catch(sequelizeErrorHandler);
    if (artikel === null) {
      throw new UseCaseError(404, 'aritikel not found');
    }
    return artikel;
  };
};

module.exports = makeGetAcaraById;
