const express = require("express");
const multer = require("multer");
const path = require("path");
const Place = require("../models/Places.model.js");
const {
  getPlaces,
  getPlace,
  updatePlace,
  deletePlace,
} = require("../controllers/Places.controller.js");
const router = express.Router();

//Get Place Details
router.get("/", getPlaces);

//Create Place
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
  Place.create({
    file: req.file.filename,
    name: req.body.name,
    placeLocation: req.body.placeLocation,
    description: req.body.description,
  })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

//Get Hotel by ID
router.get("/:id", getPlace);

//Update Hotel
router.put("/edit/:id", updatePlace);

//Delete Hotel
router.delete("/delete/:id", deletePlace);

module.exports = router;
