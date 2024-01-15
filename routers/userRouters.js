const express = require("express");
const {
  register,
  changePassword,
  editUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", register);
router.put("/changePassword", changePassword);
router.put("/editUser", editUser);
router.post("login", login);

module.exports = router;
