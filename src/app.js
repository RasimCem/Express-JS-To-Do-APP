const express = require("express");
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser')
const session = require("express-session");
const flash = require("connect-flash");
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
app.use(cookieParser())
app.use(session({
  secret: 'secret',
  cookie: {maxAge: 60000},
  resave: false,
  saveUninitialized: true
}))
app.use(flash());
app.use(function(req, res, next){
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});
app.use("/todos", todoRoutes);
