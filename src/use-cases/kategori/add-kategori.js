const { createKategori } = require('../../data-access/kategori.db');
const {
  addKategoriValidation,
} = require('../../validation/kategori.validation');
const validate = require('../../validation/validate');

const makeAddKategori = () => {
  return async function addKategori({ body }) {
    validate(addKategoriValidation, body);
    const { label } = body;
		const kategori = await createKategori(label);
		return kategori;
  };
};

module.exports = makeAddKategori;
