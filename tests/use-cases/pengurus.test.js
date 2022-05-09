/* eslint-disable no-prototype-builtins */
const { Anggota } = require('../../src/entities');
const { getAnggota } = require('../../src/use-cases/pengurus');

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
