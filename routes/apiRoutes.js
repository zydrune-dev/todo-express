import express from 'express';
import { getTodosApi, deleteTodoItem } from '../controllers/todoControllers.js';

const router = express.Router();

router.get('/list', getTodosApi);

router.delete('/delete', deleteTodoItem);

export default router;

