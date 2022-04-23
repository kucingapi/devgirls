const { registerAnggota, loginAnggota } = require('../use-cases/anggota');

module.exports = Object.freeze({
  registerAnggota: (httpRequest) => registerAnggota(httpRequest),
  loginAnggota: (httpRequest) => loginAnggota(httpRequest),
});
