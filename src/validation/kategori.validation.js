const Joi = require('joi');

const addKategoriValidation = Joi.object({
  label: Joi.string().required().min(2),
});

module.exports = { addKategoriValidation };
