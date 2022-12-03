const express = require("express");
var methodOverride = require('method-override');
const todoRoutes = require("./routes/Todo");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.set("view engine", "ejs");
app.set("views", "./src/views");
mongoose.connect(process.env.DB_CONNECT);
app.listen(3001, () => {
  console.log("App running on 3001");
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use("/todos", todoRoutes);
