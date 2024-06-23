const express = require("express");
const {
  getBooking,
  createBooking,
} = require("../controllers/Booking.controller");
// const { getUsers, createUser } = require("../controllers/User.controller");
const router = express.Router();

//Get All Blogs
router.get("/", getBooking);

//Create Blog
router.post("/create", createBooking);

module.exports = router;
