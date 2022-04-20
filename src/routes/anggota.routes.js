const express = require('express');
const makeExpressCallback = require('./make-callback');
const controller = require('../controllers/anggota.controller');

const router = express.Router();
router.route('/register').post(makeExpressCallback(controller.registerAnggota));

module.exports = router;