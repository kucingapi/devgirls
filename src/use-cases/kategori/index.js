const makeAddKategori = require('./add-kategori');

const addKategori = makeAddKategori();

const kategoriService = Object.freeze({ addKategori });

module.exports = kategoriService;
module.exports = { addKategori };
