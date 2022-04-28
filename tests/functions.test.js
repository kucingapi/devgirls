const { registerAnggota } = require('../src/controllers/anggota.controller');
const { Anggota } = require('../src/entities');
const { loginAnggota } = require('../src/use-cases/anggota');
const getPayloadJwt = require('../src/functions/getPayloadJwt');

describe('functions', () => {
  let idAnggota;

  beforeAll(async () => {
    const anggota = await registerAnggota({
      body: {
        nama: 'novel',
        email: 'email@mail.com',
        password: 'passworrd',
      },
    });
    idAnggota = anggota.body.id;
    await Anggota.findByPk(idAnggota);
  });

  afterAll(async () => {
    await Anggota.destroy({
      where: {
        id: idAnggota,
      },
    });
  });

  it('get jwt payload', async () => {
    const loginResult = await loginAnggota({
      body: {
        email: 'email@mail.com',
        password: 'passworrd',
      },
    });
    const data = loginResult.header.data;
    const jwtPayload = await getPayloadJwt({ authToken: data });
    expect(typeof jwtPayload).toBe('object');
    expect(jwtPayload.email).toBe('email@mail.com');
    expect(jwtPayload.role).toBe('anggota');
  });
});
