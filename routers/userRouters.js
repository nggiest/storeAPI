const express = require("express");
const {
  register,
  changePassword,
  editUser,
  login,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);
router.put("/changePassword", changePassword);
router.put("/editUser", editUser);
router.post("/login", login);

module.exports = router;
