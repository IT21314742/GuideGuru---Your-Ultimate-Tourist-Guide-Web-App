const express = require("express");
const multer = require("multer");
const path = require("path");
const Hotel = require("../models/Hotels.model.js");
const {
  getHotels,

  getHotel,
  updatehotel,
  deleteHotel,
} = require("../controllers/Hotels.controller.js");
const router = express.Router();

//Get Hotel Details
router.get("/", getHotels);

//Create Hotel
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Public/Images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

router.post("/create", upload.single("file"), (req, res) => {
  Hotel.create({
    file: req.file.filename,
    name: req.body.name,
    hotelLocation: req.body.hotelLocation,
    description: req.body.description,
  })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

//Get Hotel by ID
router.get("/:id", getHotel);

//Update Hotel
router.put("/edit/:id", updatehotel);

//Delete Hotel
router.delete("/delete/:id", deleteHotel);

module.exports = router;
