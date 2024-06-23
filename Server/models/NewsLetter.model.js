const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsLetterSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const NewsLetter = mongoose.model("NewsLetter", NewsLetterSchema);

module.exports = NewsLetter;
