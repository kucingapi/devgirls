const express = require('express');
const anggota = require('./anggota.routes');
const article = require('./artikel.routes');
const pengurus = require('./pengurus.routes');
const acara = require('./acara.routes');
const kategori = require('./kategori.routes');

const router = express.Router();

router.use('/', anggota);
router.use('/article', article);
router.use('/admin', pengurus);
router.use('/acara', acara);
router.use('/kategori', kategori);

module.exports = router;
