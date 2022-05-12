const { findAcaraById } = require('../../data-access/acara.db');
const { findAnggotaById } = require('../../data-access/anggota.db');
const { sequelizeErrorHandler, UseCaseError } = require('../../entities/error');
const getPayloadJwt = require('../../functions/getPayloadJwt');
const { getAcaraByIdValidation } = require('../../validation/acara.validation');
const validate = require('../../validation/validate');

const makeGetAcaraById = () => {
  return async function getAcaraById({ params, headers }) {
    validate(getAcaraByIdValidation, params);
    const { id } = params;
    let user = -1;
    if (headers.authToken) {
      const payload = getPayloadJwt(headers);
      user = payload.id;
    }

    const acara = await findAcaraById(id).catch(sequelizeErrorHandler);
    const registered = await acara.hasAnggota(user);

    if (acara === null) {
      throw new UseCaseError(404, 'acara not found');
    }

    return {...acara.dataValues, registered};
  };
};

module.exports = makeGetAcaraById;
