const makeGetAcaraName = (getAllAcaraName, sequelizeErrorHandler) => {
  return async function getAcaraName() {
    return await getAllAcaraName().catch(sequelizeErrorHandler);
  };
};

module.exports = makeGetAcaraName;
