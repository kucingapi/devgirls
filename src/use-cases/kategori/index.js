const makeAddKategori = require('./add-kategori');
const makeGetKategori = require('./get-kategori');

const addKategori = makeAddKategori();
const getKategori = makeGetKategori();

const kategoriService = Object.freeze({ addKategori, getKategori });

module.exports = kategoriService;
module.exports = { addKategori, getKategori };
