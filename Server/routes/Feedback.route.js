const express = require("express");
const {
  getFeedback,
  createFeedback,
} = require("../controllers/Feedback.controller");
const router = express.Router();

//Get Feedbacks
router.get("/", getFeedback);

//Create Feedbacks
router.post("/create", createFeedback);

module.exports = router;
