const express = require("express");
const router = express.Router();
const db = require("../../db/connect.js");

router.get("/:id", (req, res) => {
  db("participants")
    .join("users", { "participants.userID": "users.userID" })
    .where({ eventID: req.params.id })
    .select()
    .then(data => {
      res.send(data);
    });
});

router.post("/", (req, res) => {
  db.insert(req.body)
    .returning("*")
    .into("participants")
    .then(data => {
      res.json({
        status: 201,
        success: true,
        message: "Joined event successfully"
      });
    });
});

router.delete("/:eventID/:userID", (req, res) => {
  db("participants")
    .where({ eventID: req.params.eventID, userID: req.params.userID })
    .del()
    .then(() => {
      res.json({
        status: 200,
        success: true,
        message: "Quited event successfully"
      });
    });
});

module.exports = router;
