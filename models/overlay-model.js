const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OverlaySchema = new Schema({
  title: String,
  location: {
    type: [Number],
  },
  zoom: Number,
  center: Number,
  notes: [{ type: ObjectId, ref: "Note" }],
  plots: [{ type: ObjectId, ref: "Plot" }],
  creatorId: { type: ObjectId, ref: "User" },
});

module.exports = mongoose.model("Overlay", OverlaySchema);
