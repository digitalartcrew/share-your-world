const express = require("express");
const router = express.Router();
const db = require("./../db");

router.post("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
});

router.get("/loggedin", () => {
  res.send(req.isAuthenticated() ? req.user : "0");
});

module.exports = router;
