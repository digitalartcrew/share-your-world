const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const {
  AuthRouter,
  MainRouter,
  UserRouter,
  OverlayRouter,
} = require("./routes");
const db = require("./db");

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

// render server side template
app.set("view engine", "ejs");
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/", MainRouter);
app.use("/api", UserRouter);
app.use("/api", OverlayRouter);
app.use("/auth", AuthRouter);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
