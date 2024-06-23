const Ad = require("../models/Ad.model.js");

//Get Ads
const getAds = (req, res) => {
  Ad.find()
    .then((Ad) => res.json(Ad))
    .catch((err) => res.json(err));
};

//Get Hotels by ID
const getAd = (req, res) => {
  Ad.findById(req.params.id)
    .then((Ad) => res.status(200).json(Ad))
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

//Edit Hotel
const updateAd = (req, res) => {
  Ad.findById(req.params.id)
    .then((Ad) => {
      Ad.title = req.body.title;
      Ad.description = req.body.description;

      Ad.save()
        .then(() => res.status(200).json("Ad updated"))
        .catch((err) => res.status(400).json({ Error: err }));
    })

    .catch((err) => res.status(400).json({ Erro: err }));
};

//Delete Hotel
const deleteAd = (req, res) => {
  Ad.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Ad deleted"))
    .catch((err) => res.status(400).json({ Error: err }));
};

module.exports = {
  getAds,
  getAd,
  updateAd,
  deleteAd,
};
