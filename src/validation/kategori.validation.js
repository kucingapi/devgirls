const Joi = require('joi');

const addKategoriValidation = Joi.object({
  label: Joi.string().required().min(2),
});

const kategoriAcaraValidation = Joi.object({
  id: Joi.number().min(0),
});

module.exports = { addKategoriValidation, kategoriAcaraValidation };
