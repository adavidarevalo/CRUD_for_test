/** @format */

import express from 'express';
import { getTodos, getTodoById, createTodo, updateTodo, deleteTodo } from '../controllers/todoController';

const router = express.Router();

router.get('/status', (req, res) => res.status(200).json({ status: 'Success' }));
router.get('/todos', getTodos);
router.get('/todos/:id', getTodoById);
router.post('/todos', createTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

export default router;
