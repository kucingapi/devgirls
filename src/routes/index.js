const express = require('express');
const anggota = require('./anggota.routes');
const article = require('./artikel.routes');
const pengurus = require('./pengurus.routes');

const router = express.Router();

router.use('/', anggota);
router.use('/article', article);
router.use('/admin', pengurus);

module.exports = router;
