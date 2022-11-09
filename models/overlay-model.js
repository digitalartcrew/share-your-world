const mongoose = require("mongoose");
const { Note, Position, Plot } = require(".");
const Schema = mongoose.Schema;

const OverlaySchema = new Schema({
  title: String,
  center: Position,
  zoom: Number,
  notes: [Note],
  plots: [Plot],
});

module.exports = mongoose.model("Overlay", OverlaySchema);
