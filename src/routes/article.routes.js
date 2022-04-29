const express = require('express');
const makeExpressCallback = require('./make-callback');
const pengurusGroup = require('./pengurus.routes');
const artikelController = require('../controllers/artikel.controller');

const router = express.Router();

pengurusGroup.post('/',makeExpressCallback(artikelController.createArtikel));
router.use(pengurusGroup)

module.exports = router;
