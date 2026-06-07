import express from 'express';
import { showAddNewPage, showTodosPage, redirectToList } from '../controllers/todoControllers.js';

const router = express.Router();

router.get('/', redirectToList);

router.get('/add-new', showAddNewPage);

router.get('/list', showTodosPage);

export default router;
