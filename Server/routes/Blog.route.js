const express = require("express");
const {
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/Blog.controller.js");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const Blog = require("../models/Blogs.model.js");

//Get All Blogs
router.get("/", getBlogs);

//Create Blog
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
  Blog.create({
    file: req.file.filename,
    title: req.body.title,
    description: req.body.description,
  })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

//Get hotel by ID
router.get("/:id", getBlog);

//Edit Blog
router.put("/edit/:id", updateBlog);

//Delete Blog
router.delete("/delete/:id", deleteBlog);

module.exports = router;
