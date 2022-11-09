const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const NoteSchema = new Schema({
  userId: ObjectId,
  overlayId: ObjectId,
  locationId: ObjectId,
  text: String,
  createdAt: Date,
});

module.exports = mongoose.model("Note", NoteSchema);
