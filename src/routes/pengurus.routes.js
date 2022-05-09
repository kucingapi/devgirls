const express = require('express');
const pengurusController = require('../controllers/pengurus.controller');
const pengurusGroup = require('./pengurus-group.routes');
const makeExpressCallback = require('./make-callback');

const router = express.Router();

pengurusGroup.get('/anggota', (req, res) => {
  res.send(req.body);
});
router.use(pengurusGroup);

module.exports = router;
