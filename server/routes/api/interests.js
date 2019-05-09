const express = require("express");
const router = express.Router();
const db = require("../../db/connect.js");

router.get("/", (req, res) => {
  db.select()
    .from("interests")
    .then(data => {
      res.send(data);
    });
});

module.exports = router;
