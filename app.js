const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

const router = require("./Routers/Routers");

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(port, () => {
      console.log(`App listening on port ${port}!`);
    });
  })
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error}  `);
  });

app.use("/", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("GET request received");
});

// const personSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//     required: true,
//   },
// });
// const Person = mongoose.model("Person", personSchema);

// app.post("/createUser", (req, res) => {
//   Person.create(req.body)
//     .then((users) => {
//       res.json(users);
//     })
//     .catch((err) => err.json());
// });

// //app.put("/updateUser", (req, res) => {
// //  Person.create(req.body)
// //    .then((users) => res.json(users))
// //    .catch((err) => err.json());
// //});

// app.get("/getUser/:id", (req, res) => {
//   const id = req.params.id;
//   Person.findById({ _id: id })
//     .then((users) => {
//       res.json(users);
//     })
//     .catch((err) => err.json());
// });

// app.put("/updateUser/:id", (req, res) => {
//   const id = req.params.id;
//   Person.findByIdAndUpdate(

//     { _id: id },
//     { name: req.body.name, email: req.body.email, age: req.body.age }
//   )
//     .then((users) => res.json(users))
//     .catch((err) => err.json());
// });

// app.get("/", (req, res) => {
//   Person.find()
//     .then((users) => res.json(users))
//     .catch((err) => err.json());
// });

// app.delete("/deleteUser/:id", (req, res) => {
//   const id = req.params.id;
//   Person.findByIdAndDelete({ _id: id })
//     .then((result) => res.json(result))
//     .catch((err) => res.json(err));
// });

// app.get("/home", (req, res) => {
//   res.send("Welcome to the Home Page!");
// });
