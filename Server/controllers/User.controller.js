const User = require("../models/User.model.js");

//Get Places
const getUsers = (req, res) => {
  User.find()
    .then((User) => res.json(User))
    .catch((err) => res.json(err));
};

// Create User
const createUser = (req, res) => {
  const name = req.body.name;
  const idNo = req.body.idNo;
  const country = req.body.country;

  const newUser = new User({
    name,
    idNo,
    country,
  });

  newUser
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => res.status(400).json("Error: " + err));
};

// //Get Users by ID
// const getUser = (req, res) => {
//   User.findById(req.params.id)
//     .then((User) => res.status(200).json(User))
//     .catch((err) => {
//       res.status(400).json({ message: err });
//     });
// };

// //Edit User
// const updateUser = (req, res) => {
//   User.findById(req.params.id)
//     .then((User) => {
//       User.name = req.body.name;
//       User.idNo = req.body.idNo;
//       User.country = req.body.country;

//       User.save()
//         .then(() => res.status(200).json("User updated"))
//         .catch((err) => res.status(400).json({ Error: err }));
//     })

//     .catch((err) => res.status(400).json({ Erro: err }));
// };

// //Delete User
// const deleteUser = (req, res) => {
//   User.findByIdAndDelete(req.params.id)
//     .then(() => res.status(200).json("User deleted"))
//     .catch((err) => res.status(400).json({ Error: err }));
// };

module.exports = {
  getUsers,
  createUser,
};
