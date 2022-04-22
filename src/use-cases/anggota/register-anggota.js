const makeRegisterAnggota = (
  bcrypt,
  register,
  UseCaseError,
  sequelizeErrorHandler,
  createAnggota
) => {
  return async function registerAnggota({ body }) {
    const validation = register.validate(body);
    if (validation.error)
      throw new UseCaseError(400, validation.error.details[0].message);
    const { nama, email, password } = body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const anggota = await createAnggota(nama, email, hashedPassword).catch(
      sequelizeErrorHandler
    );
    return anggota;
  };
};
module.exports = makeRegisterAnggota;
