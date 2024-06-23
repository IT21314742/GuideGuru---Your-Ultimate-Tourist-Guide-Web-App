const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema(
  {
    file: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    placeLocation: {
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

const Place = mongoose.model("Place", PlaceSchema);

module.exports = Place;
