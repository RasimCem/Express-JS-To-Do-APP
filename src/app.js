const express = require("express");
const todoRoutes = require("./routes/Todo");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.set("view engine", "ejs");
app.set("views", "./src/views");
mongoose.connect(process.env.DB_CONNECT);
app.listen(3000, () => {
  console.log("App running on 3000");
});
// todo: burada sıkıntı olabilir.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/todos", todoRoutes);
