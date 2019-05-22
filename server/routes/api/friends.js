const express = require("express");
const router = express.Router();
const db = require("../../db/connect.js");

// handle get request and get friends of a user
router.get("/:id", (req, res) => {
  db("friends")
    .join("users", { "friends.friendID": "users.userID" })
    .where({ "friends.userID": req.params.id })
    .select()
    .then(data => {
      res.send(data);
    });
});

// handle get request and get a friend and user pair
router.get("/:userID/:friendID", (req, res) => {
  db("friends")
    .where({ userID: req.params.userID, friendID: req.params.friendID })
    .select()
    .then(data => {
      res.send(data);
    });
});

// handle post request and create new friend and user pair
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

// handle delete request and remove a friend and user pair
router.delete("/:friendID/:userID", (req, res) => {
  db("friends")
    .where({ friendID: req.params.friendID, userID: req.params.userID })
    .orWhere({ userID: req.params.friendID, friendID: req.params.userID })
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
