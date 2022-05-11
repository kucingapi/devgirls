const { createAcara } = require('../../data-access/acara.db');
const { sequelizeErrorHandler } = require('../../entities/error');
const { addAcaraValidation } = require('../../validation/acara.validation');
const validate = require('../../validation/validate');
const schedule = require('node-schedule');

const makeAddAcara = () => {
  return async function addAcara({ body }) {
    validate(addAcaraValidation, body);
    const { title, description, photo, registrationDate, endDate, poin } = body;
    const newAcara = await createAcara(
      title,
      description,
      photo,
      registrationDate,
      endDate,
      poin
    ).catch(sequelizeErrorHandler);
    const date = new Date(endDate);
    schedule.scheduleJob(date, async function () {
      newAcara.set({
        aktif: false,
      });
      await newAcara.save();
    });
    return newAcara;
  };
};

module.exports = makeAddAcara;
