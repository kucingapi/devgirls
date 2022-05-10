const { createAcara } = require('../../data-access/acara.db');
const { sequelizeErrorHandler } = require('../../entities/error');
const { addAcaraValidation } = require('../../validation/acara.validation');
const validate = require('../../validation/validate');

const makeAddAcara = () => {
  return async function addAcara({ body }) {
    validate(addAcaraValidation, body);
    const { title, description, photo, registrationDate, endDate } = body;
    const newAcara = await createAcara(
      title,
      description,
      photo,
      registrationDate,
      endDate
    ).catch(sequelizeErrorHandler);
    return newAcara;
  };
};

module.exports = makeAddAcara;
