const { Kategori, Acara, Artikel } = require('../../src/entities');
const { UseCaseError } = require('../../src/entities/error');
const {
  addKategori,
  getKategori,
  addKategoriAcara,
  addKategoriArtikel,
} = require('../../src/use-cases/kategori');

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

describe('create kategori acara use case', () => {
  let newAcara;
  let newKategori;
  let asc;
  beforeAll(async () => {
    newKategori = await addKategori({ body: { label: 'test1234' } });
    newAcara = await Acara.create({
      judulAcara: 'ini test',
      deskripsiAcara: 'artikel test',
      fotoAcara: 'test',
      tanggalPendaftaran: new Date(),
      tanggalAcara: new Date(),
      poin: 200,
    });
    asc = await addKategoriAcara({
      params: { id: newKategori.id },
      body: { id: newAcara.id },
    });
  });

  afterAll(async () => {
    await newAcara.destroy();
    await newKategori.destroy();
  });

  it('should create asc', async () => {
    const { kategoriId, acaraId } = asc[0].dataValues;
    console.log(kategoriId, acaraId);
    expect(asc.constructor).toBe(Array);
    expect(kategoriId).toBe(newKategori.id);
    expect(acaraId).toBe(newAcara.id);
  });

  it('should throw error when asc already made', async () => {
    let err;
    const asc2 = await addKategoriAcara({
      params: { id: newKategori.id },
      body: { id: newAcara.id },
    }).catch((e) => {
      err = e;
    });

    expect(err instanceof UseCaseError).toBeTruthy();
  });
});

describe('create kategori artikel use case', () => {
  let newArtikel;
  let newKategori;
  let asc;
  beforeAll(async () => {
    newKategori = await addKategori({ body: { label: 'test1234' } });
    newArtikel = await Artikel.create({
      judulArtikel: 'ini test',
      deskripsiArtikel: 'artikel test',
      fotoArtikel: 'test',
    });
    asc = await addKategoriArtikel({
      params: { id: newKategori.id },
      body: { id: newArtikel.id },
    });
  });

  afterAll(async () => {
    await newArtikel.destroy();
    await newKategori.destroy();
  });

  it('should create asc', async () => {
    const { kategoriId, artikelId } = asc[0].dataValues;
    expect(asc.constructor).toBe(Array);
    expect(kategoriId).toBe(newKategori.id);
    expect(artikelId).toBe(newArtikel.id);
  });

  it('should throw error when asc already made', async () => {
    let err;
    const asc2 = await addKategoriAcara({
      params: { id: newKategori.id },
      body: { id: newArtikel.id },
    }).catch((e) => {
      err = e;
    });

    expect(err instanceof Error).toBeTruthy();
  });
});
