const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PositionSchema = new Schema({
  latitude: Number,
  longitude: Number,
});

module.exports = mongoose.model("Position", PositionSchema);
