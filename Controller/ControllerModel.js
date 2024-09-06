const Person = require("../Models/PersonModel");
const createUser = (req, res) => {
  Person.create(req.body)
    .then((users) => {
      res.json(users);
    })
    .catch((err) => err.json());
};

const getAllUsers = (req, res) => {
  Person.find()
    .then((users) => res.json(users))
    .catch((err) => err.json());
};

const getSingleUser = (req, res) => {
  const id = req.params.id;
  Person.findById({ _id: id })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => err.json());
};

const updateUser = (req, res) => {
  const id = req.params.id;
  Person.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, email: req.body.email, age: req.body.age }
  )
    .then((users) => res.json(users))
    .catch((err) => err.json());
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  Person.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

module.exports = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
