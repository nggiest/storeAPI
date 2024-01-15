const Role = require("../models/roleModel");
const asyncHandler = require("express-async-handler");

const getRole = asyncHandler(async (req, res) => {
  try {
    const role = await Role.find();
    if (!role) {
      return res.status(400).json({ message: "Empty Data" });
    }
    return res.status(200).json(role);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const createRole = asyncHandler(async (req, res) => {
  try {
    const role = await Role.create(req.body);
    return res.status(200).json(role);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const getRolebyId = asyncHandler(async (req, res) => {
  try {
    const { id } = req.param;
    const role = await Role.findById(id);
    if (!role) {
      return res.status(404).json({ message: "can't find role" });
    }
    return res.status(200).json(role);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const editRole = asyncHandler(async (req, res) => {
  try {
    const { id } = req.param;
    const role = await Role.findByIdAndUpdate(id);
    if (!role) {
      return res.status(404).json({ message: "can't find role" });
    }
    const updatedRole = await Role.findById(id);
    return res.status(200).json(updatedRole);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const deleteRole = asyncHandler(async (req, res) => {
  try {
    const { id } = req.param;
    const role = await Role.findByIdAndDelete(id);
    if (!role) {
      return res.status(404).json({ message: "can't find role" });
    }
    return res.status(200).json({ message: "Deleted Success" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = {
  getRole,
  createRole,
  editRole,
  deleteRole,
  getRolebyId,
};
