const express = require('express');
const makeExpressMiddlewareCallback = require('./make-middleware-callback');
const middlewareController = require('../controllers/middleware.controller');
const router = express.Router();

router.use(makeExpressMiddlewareCallback(middlewareController.auth));
router.use(makeExpressMiddlewareCallback(middlewareController.pengurus));

module.exports = router;
