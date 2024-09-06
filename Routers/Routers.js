const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../Controller/ControllerModel");

router.post("/createUser", createUser);
router.get("/getUser/:id", getSingleUser);
router.get("/getUsers", getAllUsers);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

module.exports = router;
