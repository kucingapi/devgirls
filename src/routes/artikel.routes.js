const express = require('express');
const makeExpressCallback = require('./make-callback');
const pengurusGroup = require('./pengurus.routes');
const artikelController = require('../controllers/artikel.controller');

const router = express.Router();

router.get('/',makeExpressCallback(artikelController.getArtikel) )
pengurusGroup.post('/',makeExpressCallback(artikelController.addArtikel));
pengurusGroup.delete('/',makeExpressCallback(artikelController.removeArtikel));

router.use(pengurusGroup)

module.exports = router;
