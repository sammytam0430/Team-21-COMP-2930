const express = require('express');
const router = express.Router();
const events = require('./events.js')

router.use('/events', events);

module.exports = router;