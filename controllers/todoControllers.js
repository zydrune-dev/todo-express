import { getViewsDir } from '../utils/path.js';

export const redirectToList = (req, res, next) => {
    res.redirect('/todo/list');
};

export const showAddNewPage = (req, res, next) => {
    res.sendFile(getViewsDir('add-new.html'));
};

export const showTodosPage = (req, res, next) => {
    res.sendFile(getViewsDir('list.html'));
};