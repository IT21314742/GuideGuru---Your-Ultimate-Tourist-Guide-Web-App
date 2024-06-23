const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    roomType: {
      type: String,
      require: true,
    },
    guestsCount: {
      type: String,
      require: true,
    },
    arrivalDate: {
      type: String,
      require: true,
    },
    departureDate: {
      type: String,
      require: true,
    },
    time: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
