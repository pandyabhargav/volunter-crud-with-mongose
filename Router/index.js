const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controler');

router.get('/', controller.defaultController);
router.post('/addtodo', controller.addController);
router.get('/editTodo/:id', controller.editController);
router.post('/updateTodo/:id', controller.updateTodoController);
router.get('/deleteTodo/:id', controller.deleteTodoController);
router.post('/viewTodo', controller.viewTodosController);
module.exports = router;
