const { login } = require('../../validation/anggota.validation');
const validate = require('../../validation/validate');

const makeLoginAnggota = () => {
  return async function loginAnggota({ body }) {
    validate(login, body)

  };
};
module.exports = makeLoginAnggota;
