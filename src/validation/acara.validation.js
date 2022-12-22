const Joi = require('joi');

const addAcaraValidation = Joi.object({
  title: Joi.string().required().min(3),
  description: Joi.string().required().min(10),
  registrationDate: Joi.date().min(Date.now()),
  endDate: Joi.date().min(Date.now()),
  poin: Joi.number().min(0),
  startTime: Joi.string().pattern(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).required(),
  endTime: Joi.string().pattern(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).required(),
});

const getAcaraByIdValidation = Joi.object({
  id: Joi.number().integer().min(0).required(),
});

const removeAcaraValidation = Joi.object({
  id: Joi.number().integer().min(0).required(),
});

const userValidation = Joi.object({
  authToken: Joi.string().min(10),
});

module.exports = {
  addAcaraValidation,
  getAcaraByIdValidation,
  removeAcaraValidation,
  userValidation,
};
