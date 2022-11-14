const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToolSchema = new Schema({
  type: String,
  enum: ["PENCIL", "RECT", "CIRC"],
});

module.exports = mongoose.model("Tool", ToolSchema);
