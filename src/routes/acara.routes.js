const express = require('express');
const acaraController = require('../controllers/acara.controller');
const makeExpressCallback = require('./make-callback');
const pengurusGroup = require('./pengurus-group.routes');

const router = express.Router();

router.post('/', makeExpressCallback(acaraController.addAcara));

router.use(pengurusGroup);

module.exports = router;
