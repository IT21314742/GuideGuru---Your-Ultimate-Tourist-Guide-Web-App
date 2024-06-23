const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdSchema = new Schema(
  {
    file: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Ad = mongoose.model("Ad", AdSchema);

module.exports = Ad;
