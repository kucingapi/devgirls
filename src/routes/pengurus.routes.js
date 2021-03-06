const express = require('express');
const pengurusController = require('../controllers/pengurus.controller');
const pengurusGroup = require('./pengurus-group.routes');
const makeExpressCallback = require('./make-callback');

const router = express.Router();

pengurusGroup.get('/anggota', makeExpressCallback(pengurusController.getAnggota));
pengurusGroup.post('/anggota/make/:id', makeExpressCallback(pengurusController.addPengurus));
router.use(pengurusGroup);

module.exports = router;
