const makeRegisterAnggota = require('./register-anggota');

const registerAnggota = makeRegisterAnggota();

const anggotaService = Object.freeze({
  registerAnggota,
});

module.exports = anggotaService;
module.exports = {
  registerAnggota,
};
