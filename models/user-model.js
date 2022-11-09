const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");
import { Overlay } from "./overlay-model";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  overlays: {
    type: [Overlay],
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  try {
    // check method of registration
    const user = this;
    if (!user.isModified("password")) next();
    // generate salt
    const salt = await bcrypt.genSalt(10);
    // hash the password
    const hashedPassword = await bcrypt.hash(this.password, salt);
    // replace plain text password with hashed password
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

// checking if password is valid
UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);
