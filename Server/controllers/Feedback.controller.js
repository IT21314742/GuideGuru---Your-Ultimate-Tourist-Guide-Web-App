const Feedback = require("../models/Feedback.model.js");
// const NewsLetter = require("../models/NewsLetter.model.js");

//Get Feedbacks
const getFeedback = (req, res) => {
  Feedback.find()
    .then((Feedback) => res.json(Feedback))
    .catch((err) => res.json(err));
};

//Create Newsletter
const createFeedback = (req, res) => {
  const { name, email, message } = req.body;

  const newFeedback = new Feedback({
    name,
    email,
    message,
  });

  newFeedback
    .save()
    .then(() => res.status(200).json("Feedback added succesfully"))
    .catch((err) => res.status(400).json({ Error: err }));
};

module.exports = {
  getFeedback,
  createFeedback,
};
