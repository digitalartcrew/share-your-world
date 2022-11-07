const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { User } = require("./../models");
const db = require("../db");

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      username: "username",
      password: "password",
    },
    async (username, password, done) => {
      try {
        // check if user exists
        const userExists = await User.findOne({ username: username });
        if (userExists) {
          return done(null, false);
        }
        // Create a new user with the user data provided
        const user = await User.create({ username, password });
        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

router.post(
  "/login",
  passport.authenticate("local-login"),
  function (req, res) {
    res.redirect("/");
  }
);

// sign up successful
router.post(
  "/signup/",
  passport.authenticate("local-signup", { session: false }),
  (req, res, next) => {
    res.redirect("/");
    // res.json({ user: req.user });
  }
);

module.exports = router;
