const { createKategoriArtikelAsc } = require('../../data-access/kategori.db');
const { UseCaseError, sequelizeErrorHandler } = require('../../entities/error');
const {
  kategoriAcaraValidation,
} = require('../../validation/kategori.validation');
const validate = require('../../validation/validate');

const makeAddKategoriArtikel = () =>
  async function addKategoriArtikel({ params, body }) {
    validate(kategoriAcaraValidation, params);
    validate(kategoriAcaraValidation, body);
    const { id } = params;
    const { id: idArtikel } = body;
    const asc = await createKategoriArtikelAsc(idArtikel, id).catch(sequelizeErrorHandler);
    if (!asc) throw new UseCaseError(400, 'Already registered');
    return asc;
  };

module.exports = makeAddKategoriArtikel;
