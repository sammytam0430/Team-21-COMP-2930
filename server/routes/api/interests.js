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

router.get("/:id", (req, res) => {
  db("userInterest")
    .join("interests", { "interests.interestID": "userInterest.interestID" })
    .where({ userID: req.params.id })
    .then(data => {
      res.send(data);
    });
});

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
