const { Kategori } = require('../../src/entities');
const { UseCaseError } = require('../../src/entities/error');
const { addKategori } = require('../../src/use-cases/kategori');

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
