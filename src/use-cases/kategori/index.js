const makeAddKategori = require('./add-kategori');
const makeAddKategoriAcara = require('./add-kategori-acara');
const makeAddKategoriArtikel = require('./add-kategori-artikel');
const makeGetKategori = require('./get-kategori');
const {
  createKategoriAcaraAsc,
  createKategoriArtikelAsc,
  createKategori,
  getAllKategori,
} = require('../../data-access/kategori.db');
const { UseCaseError, sequelizeErrorHandler } = require('../../entities/error');
const {
  kategoriAcaraValidation,
  addKategoriValidation,
} = require('../../validation/kategori.validation');
const validate = require('../../validation/validate');

const addKategori = makeAddKategori(
  createKategori,
  addKategoriValidation,
  validate
);
const getKategori = makeGetKategori(getAllKategori);
const addKategoriAcara = makeAddKategoriAcara(
  createKategoriAcaraAsc,
  UseCaseError,
  kategoriAcaraValidation,
  validate
);
const addKategoriArtikel = makeAddKategoriArtikel(
  createKategoriArtikelAsc,
  UseCaseError,
  sequelizeErrorHandler,
  kategoriAcaraValidation,
  validate
);

const kategoriService = Object.freeze({
  addKategori,
  getKategori,
  addKategoriAcara,
  addKategoriArtikel,
});

module.exports = kategoriService;
module.exports = {
  addKategori,
  getKategori,
  addKategoriAcara,
  addKategoriArtikel,
};
