const { registerAnggota } = require('../../src/controllers/anggota.controller');
const { Anggota, Artikel } = require('../../src/entities');
const { loginAnggota } = require('../../src/use-cases/anggota');
const { createArtikel } = require('../../src/use-cases/artikel');

describe('artikel use cases', () => {
  let idAnggota;
  let newAnggota;

  beforeAll(async () => {
    const anggota = await registerAnggota({
      body: {
        nama: 'novel',
        email: 'email@mail.com',
        password: 'passworrd',
      },
    });
    idAnggota = anggota.body.id;
    newAnggota = await Anggota.findByPk(idAnggota);
  });

  afterAll(async () => {
    await Anggota.destroy({
      where: {
        id: idAnggota,
      },
    });
  });

  it('create artikel', async () => {
    const loginResult = await loginAnggota({
      body: {
        email: 'email@mail.com',
        password: 'passworrd',
      },
    });
    const token = loginResult.header.data
    const artikel = await createArtikel({ header: { authToken: token } });
    expect(artikel instanceof Artikel).toBeTruthy();
  });
});
