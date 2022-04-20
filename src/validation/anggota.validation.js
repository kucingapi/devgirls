const Joi = require('joi');

const register = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(5),
  nama: Joi.string().required(),
});

module.exports = { register };
