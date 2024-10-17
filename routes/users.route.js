const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("I am a get request at home");
});
router.get("/register", (req, res) => {
  res.send("I am a get request at register");
});
router.get("/login", (req, res) => {
  res.send("I am a get request at login route");
});

module.exports = router