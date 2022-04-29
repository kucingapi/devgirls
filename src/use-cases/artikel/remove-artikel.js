const {
  removeArtikelValidation,
} = require('../../validation/artikel.validation');
const validate = require('../../validation/validate');

const makeRemoveArtikel = () => {
  return async function removeArtikel({ body }) {
    validate(removeArtikelValidation, body);
    return 'test';
  };
};

module.exports = makeRemoveArtikel;
