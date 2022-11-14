const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PlotSchema = new Schema({
  position: [Number],
  height: String,
  width: String,
  pixels: [String],
  notes: { type: ObjectId, ref: "Plot" },
  plotterId: { type: ObjectId, ref: "User" },
});

module.exports = mongoose.model("Plot", PlotSchema);
