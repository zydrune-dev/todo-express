import express from 'express';
import { addNewView, showTodosPage, redirectToList, addNewItem } from '../controllers/todoControllers.js';
import apiRoutes from './apiRoutes.js'

const router = express.Router();

router.use((req, _, next) => {
    console.log(req.url);
    next();
})


router.use('/api', apiRoutes);

router.get('/', redirectToList);

router.get('/add-new', addNewView);

router.get('/list', showTodosPage);

router.post('/add-new', addNewItem);

export default router;
