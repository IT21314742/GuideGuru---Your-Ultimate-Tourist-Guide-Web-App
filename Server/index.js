const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

//Routes
//Hotel Route
const hotelRouter = require("./routes/Hotels.route.js");
app.use("/hotels", hotelRouter);

//Blog Route
const blogRouter = require("./routes/Blog.route.js");
app.use("/blogs", blogRouter);

//Newsletter Route
const newsLetterRouter = require("./routes/NewsLetter.route.js");
app.use("/newsletter", newsLetterRouter);

//Ads Route
const AdRouter = require("./routes/Ad.route.js");
app.use("/ads", AdRouter);

//Ads Route
const PlaceRouter = require("./routes/Places.route.js");
app.use("/places", PlaceRouter);

//User Route
// const UserRouter = require("./routes/User.route.js");
// app.use("/users", UserRouter);

//Auth Route
const userRouter = require("./routes/userRoutes.js");
app.use("/user", userRouter);

//Feedback Route
const feedbackRouter = require("./routes/Feedback.route.js");
app.use("/feedback", feedbackRouter);

//Booking Route
const bookingRouter = require("./routes/Booking.route.js");
app.use("/booking", bookingRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
