const { Kategori } = require('../../src/entities');
const { UseCaseError } = require('../../src/entities/error');
const { addKategori, getKategori } = require('../../src/use-cases/kategori');

describe('add kategori use case', () => {
  it('should throw error when body is not right', async () => {
    let err;
    await addKategori({ body: {} }).catch((e) => {
      err = e;
    });

    expect(err instanceof UseCaseError).toBeTruthy();
  });

  it('should return kategori', async () => {
    const kategori = await addKategori({ body: { label: 'test' } });
    expect(kategori instanceof Kategori).toBeTruthy();
    await kategori.destroy();
  });
});

describe('get kategori use case', () => {
  it('should give all kategori', async () => {
    const allKategori = await getKategori({ query: {} });
    expect(allKategori.constructor).toBe(Array);
  });
  it('should give specific kategori kategori', async () => {
    const kategori = await addKategori({ body: { label: 'test1234' } });
    const allKategori = await getKategori({ query: { label: 'test1234' } });

    expect(allKategori.constructor).toBe(Array);
    expect(allKategori.length >= 1).toBeTruthy();

    await kategori.destroy();
  });
});
