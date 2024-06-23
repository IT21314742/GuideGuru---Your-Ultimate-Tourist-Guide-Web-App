const Blog = require("../models/Blogs.model");

//Get Blogs
const getBlogs = (req, res) => {
  Blog.find()
    .then((Blog) => res.json(Blog))
    .catch((err) => res.json(err));
};

//Get Blog by ID
const getBlog = (req, res) => {
  Blog.findById(req.params.id)
    .then((Blog) => res.status(200).json(Blog))
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

//Edit Hotel
const updateBlog = (req, res) => {
  Blog.findById(req.params.id)
    .then((Blog) => {
      Blog.title = req.body.title;
      Blog.description = req.body.description;

      Blog.save()
        .then(() => res.status(200).json("Blog updated"))
        .catch((err) => res.status(400).json({ Error: err }));
    })

    .catch((err) => res.status(400).json({ Erro: err }));
};

//Delete Hotel
const deleteBlog = (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Blog deleted"))
    .catch((err) => res.status(400).json({ Error: err }));
};

module.exports = {
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
};
