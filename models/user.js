const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    job_title: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
    },
    gender: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Model
const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
