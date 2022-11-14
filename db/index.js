const mongoose = require("mongoose");
mongoose.set("debug", true);
require("dotenv").config();

mongoose
  .connect("mongodb://localhost/map-overlays" || process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
