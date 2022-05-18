const makeRegisterAcara = (
  findAcaraById,
  findAnggotaById,
  sequelizeErrorHandler,
  UseCaseError,
  getPayloadJwt,
  getAcaraByIdValidation,
  userValidation,
  validate
) =>
  async function registerAcara({ params, headers }) {
    validate(getAcaraByIdValidation, params);
    validate(userValidation, headers);
    const { id } = params;
    const payload = getPayloadJwt(headers);
    const { id: idAnggota } = payload;
    const { acara } = await findAcaraById(id).catch(sequelizeErrorHandler);
    const anggota = await findAnggotaById(idAnggota).catch(
      sequelizeErrorHandler
    );
    const addAsc = await acara.addAnggota(anggota).catch(sequelizeErrorHandler);
    if (!addAsc) throw new UseCaseError(400, 'Already registered');
    return addAsc;
  };

module.exports = makeRegisterAcara;
