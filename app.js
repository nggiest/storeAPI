require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const roleRoutes = require("./routers/roleRouters");
const userRoutes = require("./routers/userRouters");

// app.use("/", (req, res) => {
//   res.send("hello world");
// });
const port = process.env.PORT || 1500;
const mongo_url = process.env.MONGO_URI;

app.use(express.json());

app.use("/api/roles", roleRoutes);
app.use("/api/users", userRoutes);

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