const UseCaseError = require('./use-case.error');

const sequelizeErrorHandler = (err) => {
  throw new UseCaseError(400, err.errors[0].message);
};

module.exports = sequelizeErrorHandler;
