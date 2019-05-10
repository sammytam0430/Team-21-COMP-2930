const express = require("express");
const router = express.Router();
const events = require("./events.js");
const users = require("./users.js");
const interests = require("./interests.js");
const login = require("./login.js");

router.use("/events", events);
router.use("/users", users);
router.use("/interests", interests);
router.use("/login", login);

module.exports = router;
