const express = require("express");

const router = express.Router();

// @route    GET api/users
// @desc     Get all users contacts
// @acess    Private
router.get("/", (req, res) => {
  res.send("Get all users contacts");
});

// @route    POST api/users
// @desc     Add contacts
// @acess    Private
router.post("/", (req, res) => {
  res.send("Create new contact");
});

// @route    PUT api/users/:id
// @desc     Update contacts
// @acess    Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route    DELETE api/users/:id
// @desc     Delete contacts
// @acess    Private
router.post("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
