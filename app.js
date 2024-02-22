require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const moment = require("moment-timezone");
const cors = require("cors");
const app = express();
const roleRoutes = require("./routers/roleRouters");
const userRoutes = require("./routers/userRouters");
const authRoutes = require("./routers/authRouters");
const productStatusRoutes = require("./routers/productStatusRouters");
const paymentTypeRoutes = require("./routers/paymentTypeRouters");
const orderStatusRoutes = require("./routers/orderStatusRouters");
const categoryProductRoutes = require("./routers/categoryProductRouters");
// app.use("/", (req, res) => {
//   res.send("hello world");
// });
moment.tz.setDefault("Asia/Bangkok");

const port = process.env.PORT || 3030;
const mongo_url =
  "mongodb+srv://admin:admin123@storeapi.6inxh3i.mongodb.net/?retryWrites=true&w=majority&appName=storeAPI";

app.use(express.json());
app.use(cors());

app.use("/roles", roleRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/productStatus", productStatusRoutes);
app.use("/paymentType", paymentTypeRoutes);
app.use("/orderStatus", orderStatusRoutes);
app.use("/categoryProduct", categoryProductRoutes);

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
