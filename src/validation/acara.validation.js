const Joi = require('joi');

const addAcaraValidation = Joi.object({
  title: Joi.string().required().min(3),
  description: Joi.string().required().min(10),
  photo: Joi.string().required().min(5),
  registrationDate: Joi.date().min(Date.now()),
  endDate: Joi.date().min(Date.now()),
  poin: Joi.number().min(0),
});

const getAcaraByIdValidation = Joi.object({
  id: Joi.number().integer().min(0).required(),
});

const removeAcaraValidation = Joi.object({
  id: Joi.number().integer().min(0).required(),
});

module.exports = {
  addAcaraValidation,
  getAcaraByIdValidation,
  removeAcaraValidation,
};
