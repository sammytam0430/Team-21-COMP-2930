const express = require("express");
const router = express.Router();
const db = require("../../db/connect.js");

router.get("/:id", (req, res) => {
  db("participants")
    .where({ eventID: req.params.id })
    .select()
    .then(data => {
      res.send(data);
    });
});

module.exports = router;
