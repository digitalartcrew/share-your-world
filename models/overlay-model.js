const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OverlaySchema = new Schema({
  title: String,
  location: String,
  description: String,
});

module.exports = mongoose.model("Overlay", OverlaySchema);
