const express = require('express');
const anggota = require('./anggota.routes');

const router = express.Router();

router.use('/',anggota);

module.exports = router;
