const { createKategoriAcaraAsc } = require('../../data-access/kategori.db');
const { UseCaseError } = require('../../entities/error');
const {
  kategoriAcaraValidation,
} = require('../../validation/kategori.validation');
const validate = require('../../validation/validate');

const makeAddKategoriAcara = () =>
  async function addKategoriAcara({ params, body }) {
    validate(kategoriAcaraValidation, params);
    validate(kategoriAcaraValidation, body);
    const { id } = params;
    const { id: idAcara } = body;
    const asc = await createKategoriAcaraAsc(idAcara, id);
    if (!asc) throw new UseCaseError(400, 'Already registered');
    return asc;
  };

module.exports = makeAddKategoriAcara;
