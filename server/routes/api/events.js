const express = require("express");
const router = express.Router();
const db = require("../../db/connect.js");

router.get("/", (req, res) => {
  db.select()
    .from("events")
    .orderBy("eventID", "desc")
    .then(data => {
      res.send(data);
    });
});

router.post("/", (req, res) => {
  db.insert(req.body)
    .returning("*")
    .into("events")
    .then(data => {
      res.json({
        status: 201,
        success: true,
        message: "Event created",
        eventID: data[0].eventID
      });
    })
    .catch(err => {});
});

router.patch("/:id", (req, res) => {
  db("events")
    .where({ eventID: req.params.id })
    .update(req.body)
    .returning("*")
    .then(data => {
      res.send(data);
    });
});

router.delete("/:id", (req, res) => {
  db("events")
    .where({ eventID: req.params.id })
    .del()
    .then(() => {
      res.json({ success: true });
    });
});

router.get("/:id", (req, res) => {
  db("events")
    .join("users", { "events.organizer": "users.userID" })
    .where({ eventID: req.params.id })
    .select()
    .then(data => {
      res.send(data);
    });
});

module.exports = router;
