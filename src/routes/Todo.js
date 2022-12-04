const router = require("express").Router();
const Todo = require("../models/Todo.js");
const todoController = require("../controllers/Todo");
const { body } = require("express-validator");
const { validateStore } = require("../middlewares/validation/Todo.js");
// todo: validation yapılacak. !!!!!!!!!
router.get("/", todoController.index);
router.get("/create", todoController.create);
router.post("/", validateStore, todoController.store);
router.get("/:id", todoController.edit);
router.put("/:id", todoController.update);
router.delete("/:id", todoController.destroy);
module.exports = router;