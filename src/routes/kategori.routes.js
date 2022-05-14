const express = require('express');
const makeExpressCallback = require('./make-callback');
const pengurusGroup = express.Router();
const makeExpressMiddlewareCallback = require('./make-middleware-callback');
const middlewareController = require('../controllers/middleware.controller');
const kategoriController = require('../controllers/kategori.controller');

pengurusGroup.use(makeExpressMiddlewareCallback(middlewareController.auth));
pengurusGroup.use(makeExpressMiddlewareCallback(middlewareController.pengurus));
pengurusGroup.post('/', makeExpressCallback(kategoriController.addKategori));

const router = express.Router();

router.use(pengurusGroup);

module.exports = router;
