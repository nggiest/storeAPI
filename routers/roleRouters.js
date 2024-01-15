const express = require("express");
const {
  getRole,
  createRole,
  getRolebyId,
  editRole,
  deleteRole,
} = require("../controllers/roleControllers");

const router = express.Router();

router.get("/", getRole);
router.post("/", createRole);
router.get("/:id", getRolebyId);
router.put("/:id", editRole);
router.delete("/:id", deleteRole);

module.exports = router;
