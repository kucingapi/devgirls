const { registerAnggota, loginAnggota } = require('../use-cases/anggota');

const anggotaController = Object.freeze({
  registerAnggota: (httpRequest) => registerAnggota(httpRequest),
  loginAnggota: (httpRequest) => loginAnggota(httpRequest),
});

module.exports = anggotaController;
