const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  todo: { type: String, required: true },
  order: { type: Number, required: false },
});
module.exports = mongoose.model("Todo", todoSchema);
