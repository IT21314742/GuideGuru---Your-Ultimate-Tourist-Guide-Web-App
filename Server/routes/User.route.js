const express = require("express");
const { getUsers, createUser } = require("../controllers/User.controller");
const router = express.Router();

//Get All Blogs
router.get("/", getUsers);

//Create Blog
router.post("/create", createUser);

// //Get hotel by ID
// router.get("/:id", getUser);

// //Edit Blog
// router.put("/edit/:id", updateUser);

// //Delete Blog
// router.delete("/delete/:id", deleteUser);

module.exports = router;
