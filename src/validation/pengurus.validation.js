const Joi = require('joi');

const addPengurusValidation = Joi.object({
  id: Joi.number().required().min(0),
});

module.exports = { addPengurusValidation };
