import express from 'express';
import { getViewsDir } from '../utils/path.js';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.redirect('/todo/list');
});

router.get('/add-new', (req, res, next) => {
    res.sendFile(getViewsDir('add-new.html'));
});

router.get('/list', (req, res, next) => {
    res.sendFile(getViewsDir('list.html'));
});

export default router;
