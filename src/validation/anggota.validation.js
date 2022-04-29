const Joi = require('joi');

const register = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(5),
  nama: Joi.string().required(),
});

const login = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(5),
});

const createArtikelValidation = Joi.object({
  title: Joi.string().required().min(3),
  description: Joi.string().required().min(5),
});

module.exports = { register, login, createArtikelValidation };
