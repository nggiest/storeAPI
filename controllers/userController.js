const User = require("../models/userModels");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const customId = require("custom-id");
const { json } = require("express");

const register = asyncHandler(async (req, res) => {
  const {
    customerNumber,
    username,
    name,
    email,
    password,
    role,
    address,
    phoneNumber,
  } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const customerNo = customId({ randomLengt: 6 });
    const user = await User.create({
      customerNumber: customerNo,
      username,
      name,
      email,
      password: hashPassword,
      role,
      address,
      phoneNumber,
    });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const changePassword = asyncHandler(async (req, res) => {
  try {
    const newPassword = bcrypt.hash(req.body.password, 10);
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, { password: newPassword });
    if (!user) {
      return res.status(404).json({ message: "User can't be updated" });
    }
    const updatedPassword = await User.findById(id);
    return res.status(200).json(updatedPassword);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const editUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(404).json({ message: "User can't be find" });
    }
    const updateProfile = await User.find(id);
    return res.status(200).json(updateProfile);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const mail = await User.findOne({ email });
    const uname = await User.findOne({ username });
    if (!uname) {
      return res.status(404).json({ message: "Can't find user" });
    }

    const passwordMatch = await bcrypt.compareSync(password, uname.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    const token = jwt.sign({ userId: User._id }, process.env.SECRET_KEY, {
      expiresIn: "1 hour",
    });
    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = { register, changePassword, editUser, login };
