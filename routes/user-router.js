const express = require("express");

const router = express.Router();

const {
  updateUser,
  deleteUser,
  getUserById,
  getUsers,
} = require("../controllers/user-ctrl");

router.put("/user/update/:id", updateUser);
router.delete("/user/delete/:id", deleteUser);
router.get("/user/:id", getUserById);
router.get("/users", getUsers);

module.exports = router;
