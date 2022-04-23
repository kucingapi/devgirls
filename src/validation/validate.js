const { UseCaseError } = require('../entities/error');

const validate = (validator, body) => {
  const validation = validator.validate(body);
  if (validation.error)
    throw new UseCaseError(400, validation.error.details[0].message);
};

module.exports = validate;
