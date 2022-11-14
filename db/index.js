const mongoose = require("mongoose");
mongoose.set("debug", true);
require("dotenv").config();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "custom-overlays",
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
