const express = require('express');

const {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todo.controller');

const router = express.Router();

router.get('/', getAllTodos);

router.get('/:id', getTodoById);

router.post('/', createTodo);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

module.exports = { todoRouter: router };
