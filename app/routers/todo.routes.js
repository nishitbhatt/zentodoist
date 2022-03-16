const express = require('express')
const router = express.Router()
const todoController = require('./../controllers/Todo.controller');


// Main Todo Route
router.get('/', todoController.demoMethods)
// Create New Todo
router.post("/create", todoController.createNewTodo);
// Get All Todo
router.get("/get-all", todoController.getAllTodos);
// Find One Todo
router.get("/:todoId", todoController.findOne);
// Update Todo
router.put("/:todoId", todoController.update);
// Delete Todo
router.delete("/:todoId", todoController.delete);

module.exports = router