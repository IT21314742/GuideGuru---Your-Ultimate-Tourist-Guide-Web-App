const Hotel = require("../models/Hotels.model.js");

//Get Hotels
const getHotels = (req, res) => {
  Hotel.find()
    .then((Hotel) => res.json(Hotel))
    .catch((err) => res.json(err));
};

//Get Hotels by ID
const getHotel = (req, res) => {
  Hotel.findById(req.params.id)
    .then((Hotel) => res.status(200).json(Hotel))
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

//Edit Hotel
const updatehotel = (req, res) => {
  Hotel.findById(req.params.id)
    .then((Hotel) => {
      Hotel.name = req.body.name;
      Hotel.hotelLocation = req.body.hotelLocation;
      Hotel.description = req.body.description;

      Hotel.save()
        .then(() => res.status(200).json("Hotel updated"))
        .catch((err) => res.status(400).json({ Error: err }));
    })

    .catch((err) => res.status(400).json({ Erro: err }));
};

//Delete Hotel
const deleteHotel = (req, res) => {
  Hotel.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Hotel deleted"))
    .catch((err) => res.status(400).json({ Error: err }));
};

module.exports = {
  getHotels,
  getHotel,
  updatehotel,
  deleteHotel,
};
