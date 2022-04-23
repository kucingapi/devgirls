const { UseCaseError } = require('../../entities/error');
const { login } = require('../../validation/anggota.validation');

const makeLoginAnggota = () => {
  return async function loginAnggota({ body }) {
    const validation = login.validate(body);
    console.log(validation);
    if (validation.error)
      throw new UseCaseError(400, validation.error.details[0].message);

    return validation;
  };
};
module.exports = makeLoginAnggota;
