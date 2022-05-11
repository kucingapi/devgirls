/* eslint-disable no-prototype-builtins */
const { Acara } = require('../../src/entities');
const { UseCaseError } = require('../../src/entities/error');
const {
  addAcara,
  getAcara,
  getAcaraById,
  removeAcara,
} = require('../../src/use-cases/acara');

describe('add acara use case', () => {
  it('should throw an error when body is empty', async () => {
    let error = false;

    await addAcara({ body: {} }).catch((e) => {
      error = e;
    });

    expect(error instanceof UseCaseError).toBeTruthy();
  });
  it('should throw an error when the date is less than today', async () => {
    let error = false;

    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const newAcara = await addAcara({
      body: {
        title: 'title',
        description: 'ini adalah suatu deskripsi',
        photo: 'link photo',
        registrationDate: yesterday,
        endDate: yesterday,
        poin: 100,
      },
    }).catch((e) => {
      error = e;
    });
    expect(error instanceof UseCaseError).toBeTruthy();
  });

  it('should create a new acara', async () => {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const newAcara = await addAcara({
      body: {
        title: 'title',
        description: 'ini adalah suatu deskripsi',
        photo: 'link photo',
        registrationDate: tomorrow,
        endDate: tomorrow,
        poin: 100,
      },
    });
    expect(newAcara instanceof Acara).toBeTruthy();
    newAcara.destroy();
  });
});

describe('get acara usecase', () => {
  let rows;
  let pagination;

  beforeEach(async () => {
    const response = await getAcara({ query: {} });
    rows = response.records;
    pagination = response['_metadata'];
  });

  it('should return array', async () => {
    expect(rows.constructor).toBe(Array);
  });

  it('should have id, date, description, title, or empty array', async () => {
    let hasProperty = true;
    rows.map((row) => {
      if (
        !(
          row.hasOwnProperty('id') &&
          row.hasOwnProperty('createdAt') &&
          row.hasOwnProperty('judulAcara') &&
          row.hasOwnProperty('deskripsiAcara')
        )
      )
        hasProperty = false;
    });
    expect(hasProperty).toBeTruthy();
  });

  it('should filter title & description', async () => {
    const newAcara = await Acara.create({
      judulAcara: 'ini test',
      deskripsiAcara: 'artikel test',
      fotoAcara: 'test',
      tanggalPendaftaran: new Date(),
      tanggalAcara: new Date(),
      poin: 200,
    });

    const response = await getAcara({
      query: {
        title: 'test',
        description: 'test',
      },
    });

    newAcara.destroy();
    rows = response.records;

    expect(rows.length >= 1).toBeTruthy();
  });

  it('should has pagination', () => {
    expect(typeof pagination.page).toBe('number');
    expect(typeof pagination.per_page).toBe('number');
    expect(typeof pagination.total_count).toBe('number');
  });
});

describe('get acara by id usecase', () => {
  let newAcara;
  beforeAll(async () => {
    newAcara = await Acara.create({
      judulAcara: 'ini test',
      deskripsiAcara: 'artikel test',
      fotoAcara: 'test',
      tanggalPendaftaran: new Date(),
      tanggalAcara: new Date(),
      poin: 200,
    });
  });

  afterAll(async () => {
    await newAcara.destroy();
  });

  it('should throw an error when there is no params', async () => {
    let error = false;
    try {
      await getAcaraById({ params: {} });
    } catch (e) {
      error = e;
    }
    expect(error instanceof UseCaseError).toBeTruthy();
  });

  it('should throw an error when the id is not found', async () => {
    let error = false;
    try {
      await getAcaraById({ params: { id: 2000 } });
    } catch (e) {
      error = e;
    }
    expect(error instanceof UseCaseError).toBeTruthy();
  });
  it('should found 1 id when the id is found', async () => {
    const id = newAcara.id;
    const acara = await getAcaraById({ params: { id: id } });
    expect(acara instanceof Acara).toBeTruthy();
  });
});

describe('remove artikel use case', () => {
  let newAcara;
  beforeAll(async () => {
    newAcara = await Acara.create({
      judulAcara: 'ini test',
      deskripsiAcara: 'artikel test',
      fotoAcara: 'test',
      tanggalPendaftaran: new Date(),
      tanggalAcara: new Date(),
      poin: 200,
    });
  });

  afterAll(async () => {
    await newAcara.destroy();
  });

  it('should return artikel id', async () => {
    const id = await removeAcara({
      body: { id: newAcara.id },
    });
    expect(typeof id).toBe('number');
  });

  it('should return error when the id is empty', async () => {
    let error = false;
    try {
      await removeAcara({
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
      await removeAcara({
        body: { id: 0 },
      });
    } catch (e) {
      error = e;
    }
    expect(error instanceof UseCaseError).toBeTruthy();
    expect(error.message).toBe('acara is not found');
  });
});
