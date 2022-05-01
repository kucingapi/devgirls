const { registerAnggota } = require('../../src/controllers/anggota.controller');
const { Anggota, Artikel } = require('../../src/entities');
const { UseCaseError } = require('../../src/entities/error');
const { loginAnggota } = require('../../src/use-cases/anggota');
const {
  addArtikel,
  removeArtikel,
  getArtikel,
} = require('../../src/use-cases/artikel');

describe('add artikel use cases', () => {
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

  it('should return artikel', async () => {
    const loginResult = await loginAnggota({
      body: {
        email: 'email@mail.com',
        password: 'passworrd',
      },
    });
    const token = loginResult.header.data;
    const artikel = await addArtikel({
      headers: { authToken: token },
      body: { title: 'ini adalah title', description: 'ini adalah deskripsi' },
    });
    expect(artikel instanceof Artikel).toBeTruthy();
  });

  it('should return error when the body is not rigth', async () => {
    let error = false;
    const loginResult = await loginAnggota({
      body: {
        email: 'email@mail.com',
        password: 'passworrd',
      },
    });
    const token = loginResult.header.data;
    await addArtikel({
      headers: { authToken: token },
      body: {},
    }).catch(() => {
      error = true;
    });
    expect(error).toBeTruthy();
  });
});

describe('remove artikel use cases', () => {
  let idAnggota;
  let token;
  let artikel;

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
    const loginResult = await loginAnggota({
      body: {
        email: 'email@mail.com',
        password: 'passworrd',
      },
    });
    token = loginResult.header.data;
    artikel = await addArtikel({
      headers: { authToken: token },
      body: { title: 'ini adalah title', description: 'ini adalah deskripsi' },
    });
  });

  afterAll(async () => {
    await Artikel.destroy({
      where: {
        id: artikel.id,
      },
    });

    await Anggota.destroy({
      where: {
        id: idAnggota,
      },
    });
  });

  it('should return artikel id', async () => {
    const id = await removeArtikel({
      body: { id: artikel.id },
    });
    expect(typeof id).toBe('number');
  });

  it('should return error when the id is empty', async () => {
    let error = false;
    try {
      await removeArtikel({
        body: {},
      });
    } catch (e) {
      error = e;
    }
    expect(error instanceof UseCaseError).toBeTruthy();
    expect(error.message).toBe('"id" is required');
  });

  it('should throw an error when it dosnt exist', async () => {
    let error = false;
    try {
      await removeArtikel({
        body: { id: 0 },
      });
    } catch (e) {
      error = e;
    }
    expect(error instanceof UseCaseError).toBeTruthy();
    expect(error.message).toBe('artikel is not found');
  });
});

describe('get artikel use cases', () => {
  it('should return array', async () => {
    const artikel = getArtikel({ body: {} });
    expect(artikel.constructor === Array).toBeTruthy();
  });
});
