const Joi = require('joi');

const fileValidation = Joi.object({
  file: Joi.object().required(),
});

module.exports = { fileValidation };
