const express = require('express');
const makeExpressCallback = require('./make-callback');
const pengurusGroup = require('./pengurus.routes');

const router = express.Router();

pengurusGroup.post('/',makeExpressCallback());
router.use(pengurusGroup)

module.exports = router;
