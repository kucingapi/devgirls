const UseCaseError = require('../../entities/error');
const { register } = require('../../validation/anggota.validation');

const makeRegisterAnggota = () => {
  return async function registerAnggota({ body }) {
    const validation = register.validate(body);
    if (validation.error)
      throw new UseCaseError(400, validation.error.details[0].message);

    return validation;
  };
};
module.exports = makeRegisterAnggota;
