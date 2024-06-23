const express = require("express");
const {
  getNewsLetter,
  createNewsLetter,
} = require("../controllers/NewsLetter.controller");
const router = express.Router();

//Get Newsletter Emails
router.get("/", getNewsLetter);

//Create Newsletter
router.post("/create", createNewsLetter);

module.exports = router;
