const express = require('express');
const makeExpressCallback = require('./make-callback');
const anggotaController = require('../controllers/anggota.controller');

const router = express.Router();
router.route('/').get((req, res) => {
  res.send("hello world")
});
router
  .route('/register')
  .post(makeExpressCallback(anggotaController.registerAnggota));
router
  .route('/login')
  .post(makeExpressCallback(anggotaController.loginAnggota));

module.exports = router;
