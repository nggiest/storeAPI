const jwt = require("jsonwebtoken");
const Role = require("../models/roleModels");

const checkRole = (allowedRoles) => {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers["authorization"];
      const token = authHeader && authHeader.split(" ")[1];
      if (!token) return res.status(401).json({ message: "Unauthorized" });

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userRoles = await Role.find({ roleId: { $in: decoded.roles } });

      const allowed = userRoles.some((role) =>
        allowedRoles.includes(role.name)
      );
      if (allowed) {
        req.user = decoded;
        next();
      } else {
        res.status(403).json({ message: "Forbidden" });
      }
    } catch (error) {
      res.status(403).json({ message: "Forbidden" });
    }
  };
};

module.exports = { checkRole };
