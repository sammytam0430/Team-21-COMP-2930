const express = require("express");
const router = express.Router();
const db = require("../../db/connect.js");

router.get("/:id", (req, res) => {
  db("friends")
    .join("users", { "friends.friendID": "users.userID" })
    .where({ "friends.userID": req.params.id })
    .select()
    .then(data => {
      res.send(data);
    });
});

router.get("/:userID/:friendID", (req, res) => {
  db("friends")
    .where({ userID: req.params.userID, friendID: req.params.friendID })
    .select()
    .then(data => {
      res.send(data);
    });
});

router.post("/", (req, res) => {
  db.insert([
    { userID: req.body.userID, friendID: req.body.friendID },
    { friendID: req.body.userID, userID: req.body.friendID }
  ])
    .returning("*")
    .into("friends")
    .then(data => {
      res.json({
        status: 201,
        success: true,
        message: "Added friend successfully"
      });
    });
});

router.delete("/:eventID/:userID", (req, res) => {
  db("friends")
    .where({ friendID: req.params.eventID, userID: req.params.userID })
    .orWhere({ userID: req.params.eventID, friendID: req.params.userID })
    .del()
    .then(() => {
      res.json({
        status: 200,
        success: true,
        message: "Removed friend successfully"
      });
    });
});

module.exports = router;
