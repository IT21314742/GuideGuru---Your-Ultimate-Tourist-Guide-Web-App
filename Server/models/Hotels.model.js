const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HotelSchema = new Schema(
  {
    file: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    hotelLocation: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Hotel = mongoose.model("Hotel", HotelSchema);

module.exports = Hotel;
