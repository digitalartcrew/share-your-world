const mongoose = require("mongoose");
const { Position, Tool } = require(".");
const Schema = mongoose.Schema;

const PlotSchema = new Schema({
  position: Position,
  toolType: Tool,
  height: String,
  width: String,
  pixels: [String],
  notes: [Note],
});

module.exports = mongoose.model("Plot", PlotSchema);
