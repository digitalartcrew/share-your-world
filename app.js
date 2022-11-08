const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const { OverlayRouter, AuthRouter, MainRouter } = require("./routes");
const db = require("./db");
require("dotenv").config();

//Cookie and Session
const cookieParser = require("cookie-parser");
const session = require("express-session");
app.use(
  session({
    secret: "awesome",
    resave: true,
    saveUninitialized: true,
  })
);

const passport = require("passport");
require("./config/passport")(passport); //passport configuration

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/", MainRouter);
app.use("/api", OverlayRouter);
app.use("/auth", AuthRouter);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
