const { registerAnggota } = require('../use-cases/anggota');

module.exports = Object.freeze({
  registerAnggota: (httpRequest) => registerAnggota(httpRequest),
});
