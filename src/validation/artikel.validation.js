const Joi = require('joi');

const addArtikelValidation = Joi.object({
  title: Joi.string().required().min(3),
  description: Joi.string().required().min(5),
  photo: Joi.string().required().min(5),
});

const removeArtikelValidation = Joi.object({
  id: Joi.number().integer().min(0).required(),
});

const getArtikelByIdValidation = Joi.object({
  id: Joi.number().integer().min(0).required(),
});

module.exports = { addArtikelValidation, removeArtikelValidation, getArtikelByIdValidation };
