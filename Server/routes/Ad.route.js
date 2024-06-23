const express = require("express");
const {
  getAds,
  getAd,
  updateAd,
  deleteAd,
} = require("../controllers/Ad.controller");
const multer = require("multer");
const path = require("path");
const Ad = require("../models/Ad.model.js");
const router = express.Router();

//Get Ad Details
router.get("/", getAds);

//Create Ad
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
  Ad.create({
    file: req.file.filename,
    title: req.body.title,
    description: req.body.description,
  })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

//Get Ad by ID
router.get("/:id", getAd);

//Update Hotel
router.put("/edit/:id", updateAd);

//Delete Ad
router.delete("/delete/:id", deleteAd);

module.exports = router;
