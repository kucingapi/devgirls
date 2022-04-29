const { createArticle } = require('../../data-access/artikel.db');
const getPayloadJwt = require('../../functions/getPayloadJwt');
const {
  createArtikelValidation,
} = require('../../validation/anggota.validation');
const validate = require('../../validation/validate');

const makeAddArtikel = () => {
  return async function createArtikel({ headers, body }) {
    validate(createArtikelValidation, body);
    const jwtPayload = getPayloadJwt(headers);
    const { title, description } = body;
    const { email } = jwtPayload;
    const artikel = await createArticle(email, title, description);
    return artikel;
  };
};

module.exports = makeAddArtikel;
