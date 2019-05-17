const express = require("express");
const router = express.Router();
const events = require("./events.js");
const users = require("./users.js");
const interests = require("./interests.js");
const login = require("./login.js");
const participants = require("./participants.js");
const friends = require("./friends.js");

router.use("/events", events);
router.use("/users", users);
router.use("/interests", interests);
router.use("/login", login);
router.use("/participants", participants);
router.use("/friends", friends);

module.exports = router;
