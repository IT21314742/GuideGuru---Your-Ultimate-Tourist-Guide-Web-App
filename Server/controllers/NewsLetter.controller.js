const NewsLetter = require("../models/NewsLetter.model.js");

//Get Hotels
const getNewsLetter = (req, res) => {
  NewsLetter.find()
    .then((NewsLetter) => res.json(NewsLetter))
    .catch((err) => res.json(err));
};

//Create Newsletter
const createNewsLetter = (req, res) => {
  const { email } = req.body;

  const newNewsLetter = new NewsLetter({
    email,
  });

  newNewsLetter
    .save()
    .then(() => res.status(200).json("Newsletter added succesfully"))
    .catch((err) => res.status(400).json({ Error: err }));
};

module.exports = {
  getNewsLetter,
  createNewsLetter,
};
