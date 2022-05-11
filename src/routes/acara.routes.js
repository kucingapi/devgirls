const express = require('express');
const acaraController = require('../controllers/acara.controller');
const makeExpressCallback = require('./make-callback');
const pengurusGroup = express.Router();
const makeExpressMiddlewareCallback = require('./make-middleware-callback');
const middlewareController = require('../controllers/middleware.controller');

pengurusGroup.use(makeExpressMiddlewareCallback(middlewareController.auth));
pengurusGroup.use(makeExpressMiddlewareCallback(middlewareController.pengurus));

const router = express.Router();

router.get('/:id', makeExpressCallback(acaraController.getAcaraById));
router.get('/', makeExpressCallback(acaraController.getAcara));
pengurusGroup.post('/', makeExpressCallback(acaraController.addAcara));

router.use(pengurusGroup);

module.exports = router;
