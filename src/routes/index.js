const express = require('express');
const anggota = require('./anggota.routes');
const article = require('./artikel.routes');

const router = express.Router();

router.use('/',anggota);
router.use('/article',article);

module.exports = router;
