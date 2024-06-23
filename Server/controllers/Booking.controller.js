const Booking = require("../models/Booking.model");

//Get Booking
const getBooking = (req, res) => {
  Booking.find()
    .then((Booking) => res.json(Booking))
    .catch((err) => res.json(err));
};

//Create Booking
const createBooking = (req, res) => {
  const {
    name,
    email,
    roomType,
    guestsCount,
    arrivalDate,
    departureDate,
    time,
    phone,
  } = req.body;

  const newBooking = new Booking({
    name,
    email,
    roomType,
    guestsCount,
    arrivalDate,
    departureDate,
    time,
    phone,
  });

  newBooking
    .save()
    .then(() => res.status(200).json("Booking Success"))
    .catch((err) => res.status(400).json({ Error: err }));
};

module.exports = {
  getBooking,
  createBooking,
};
