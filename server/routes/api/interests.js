const express = require("express");
const router = express.Router();
const db = require("../../db/connect.js");

// handle get request and get all interest type
router.get("/", (req, res) => {
  db.select()
    .from("interests")
    .then(data => {
      res.send(data);
    });
});

// handle get request and get interests of a user
router.get("/:id", (req, res) => {
  db("userInterest")
    .join("interests", { "interests.interestID": "userInterest.interestID" })
    .where({ userID: req.params.id })
    .then(data => {
      res.send(data);
    });
});

// handle post request and add new interest of a user
router.post("/", (req, res) => {
  db.insert([{ userID: req.body.userID, interestID: req.body.friendID }])
    .returning("*")
    .into("userInterest")
    .then(data => {
      res.json({
        status: 201,
        success: true,
        message: "Added interest successfully"
      });
    });
});

// handle delete request and remove a interest of a user
router.delete("/:userID/:interestID", (req, res) => {
  db("userInterest")
    .where({ userID: req.params.userID, interestID: req.params.interestID })
    .del()
    .then(() => {
      res.json({
        status: 200,
        success: true,
        message: "Removed interest successfully"
      });
    });
});

module.exports = router;
