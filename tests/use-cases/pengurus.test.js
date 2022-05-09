/* eslint-disable no-prototype-builtins */
const { Anggota } = require('../../src/entities');
const { UseCaseError } = require('../../src/entities/error');
const { registerAnggota } = require('../../src/use-cases/anggota');
const { getAnggota, addPengurus } = require('../../src/use-cases/pengurus');

describe('get anggota usecase', () => {
  let rows;
  let pagination;

  beforeEach(async () => {
    const response = await getAnggota({ query: {} });
    rows = response.records;
    pagination = response['_metadata'];
  });

  it('should return array', async () => {
    expect(rows.constructor).toBe(Array);
  });

  it('should have id, name, email, and role', async () => {
    let hasProperty = true;
    rows.map((row) => {
      if (
        !(
          row.hasOwnProperty('id') &&
          row.hasOwnProperty('email') &&
          row.hasOwnProperty('namaAnggota') &&
          row.hasOwnProperty('password') &&
          row.hasOwnProperty('jenisAnggota') &&
          row.hasOwnProperty('poin')
        )
      )
        hasProperty = false;
    });
    expect(hasProperty).toBeTruthy();
  });

  it('should filter name & email', async () => {
    const newAnggota = await Anggota.create({
      namaAnggota: 'test',
      email: 'test@gmail.com',
      password: '12345',
    });

    const response = await getAnggota({
      query: {
        name: 'test',
        email: 'test',
      },
    });

    newAnggota.destroy();
    rows = response.records;

    expect(rows.length >= 1).toBeTruthy();
  });

  it('should has pagination', () => {
    expect(typeof pagination.page).toBe('number');
    expect(typeof pagination.per_page).toBe('number');
    expect(typeof pagination.total_count).toBe('number');
  });
});

describe('make pengurus usecase', () => {
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
  it('should throw an error when there is no id', async () => {
    let error = false;
    await addPengurus({ params: {} }).catch((e) => {
      error = e;
    });
    expect(error instanceof UseCaseError).toBeTruthy();
  });
  it('should make anggota to pengurus', async () => {
    expect(newAnggota.jenisAnggota).toBe('anggota');
    await addPengurus({ params: { id: idAnggota } });
    await newAnggota.reload();
    expect(newAnggota.jenisAnggota).toBe('pengurus');
  });
});
