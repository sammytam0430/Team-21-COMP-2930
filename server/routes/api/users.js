const express = require("express");
const router = express.Router();
const db = require("../../db/connect.js");

const bcrypt = require("bcrypt");
const saltRounds = 10;

router.get("/:id", (req, res) => {
  db("users")
    .where({ userID: req.params.id })
    .select()
    .then(data => {
      res.send(data);
    });
});

router.post("/", (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    req.body.password = hash;
    db.insert(req.body)
      .returning("*")
      .into("users")
      .then(data => {
        res.json({ status: 201, success: true, message: "User created" });
      })
      .catch(err => {
        if (err.code === 23505) {
          res.json({
            status: 403,
            success: false,
            message: "This email already exists"
          });
        }
      });
  });
});

router.patch("/:id", (req, res) => {
  db("users")
    .where({ userID: req.params.id })
    .update(req.body)
    .returning("*")
    .then(data => {
      res.send(data);
    });
});

router.delete("/:id", (req, res) => {
  db("users")
    .where({ userID: req.params.id })
    .del()
    .then(() => {
      res.json({ success: true });
    });
});

router.get("/:id/friends", (req, res) => {
  db("friends")
    .where({ userID: req.params.id })
    .select()
    .then(data => {
      res.send(data);
    });
});

module.exports = router;
