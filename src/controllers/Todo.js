const Todo = require("../models/Todo");
const { validationResult } = require('express-validator');

const index = async (req, res) => {
  let todos = await Todo.find({});
  res.render("pages/todos/index", {
    todos,
  });
};

const create = (req, res) => {
  res.render("pages/todos/create");
};

const store = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const todo = new Todo({ todo: req.body.todo });
  try {
    await todo.save();
    res.redirect("/todos");
  } catch (err) {
    res.redirect("/todos");
  }
};

const edit = async (req, res) => {
  const todoId = req.params.id;
  const todo = await Todo.findById(todoId).exec();
  res.render("pages/todos/edit", { todo: todo });
};

const update = async (req, res) => {
  const todoId = req.params.id;
  await Todo.findByIdAndUpdate(todoId, { todo: req.body.todo }).exec();

  res.redirect("/todos");
};

const destroy = (req, res) => {
  const todoId = req.params.id;
  Todo.findByIdAndRemove(todoId).exec();
  res.redirect("/todos");
};

module.exports.index = index;
module.exports.store = store;
module.exports.create = create;
module.exports.edit = edit;
module.exports.update = update;
module.exports.destroy = destroy;
