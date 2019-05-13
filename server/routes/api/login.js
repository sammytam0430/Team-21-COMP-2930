const express = require("express");
const router = express.Router();
const db = require("../../db/connect.js");

const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/", (req, res) => {
  db("users")
    .where("email", req.body.email)
    .orWhere("prefEmail", req.body.email)
    .select()
    .then(data => {
      if (data.length === 0) {
        res.json({
          status: 404,
          success: false,
          message: "Email does not exist"
        });
      }
      if (bcrypt.compareSync(req.body.password, data[0].password)) {
        res.send({
          status: 200,
          success: true,
          message: "OK",
          userID: data[0].userID
        });
      } else {
        res.send({
          status: 403,
          success: false,
          message: "Incorrect password"
        });
      }
    });
});

module.exports = router;
