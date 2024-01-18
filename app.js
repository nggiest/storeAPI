require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const moment = require("moment-timezone");
const app = express();
const roleRoutes = require("./routers/roleRouters");
const userRoutes = require("./routers/userRouters");
const authRoutes = require("./routers/authRouters");
const productStatusRoutes = require("./routers/productStatusRouters");
const paymentTypeRoutes = require("./routers/paymentTypeRouters");

// app.use("/", (req, res) => {
//   res.send("hello world");
// });
moment.tz.setDefault("Asia/Bangkok");

const port = process.env.PORT || 1500;
const mongo_url = process.env.MONGO_URI;

app.use(express.json());

app.use("/api/roles", roleRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/productStatus", productStatusRoutes);
app.use("/api/paymentType", paymentTypeRoutes);

mongoose
  .connect(mongo_url)
  .then(() => {
    app.listen(port, () => {
      console.log(`store API run in port ${port}`);
    });
    console.log("connected to database");
  })
  .catch(() => {
    console.error();
  });
