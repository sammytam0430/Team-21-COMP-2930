const express = require('express');
const router = express.Router();
const events = require('./events.js')
const users = require('./users.js')

router.use('/events', events);
router.use('/users', users);

module.exports = router;