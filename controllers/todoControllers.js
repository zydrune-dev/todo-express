import { getViewsDir } from '../utils/path.js';
import { addTodo, readStore,deleteTodo } from '../models/todo.js'

export const redirectToList = (req, res, next) => {
    res.redirect('/todo/list');
};

export const addNewView = (req, res, next) => {
    res.sendFile(getViewsDir('add-new.html'));
};

export const showTodosPage = (req, res, next) => {
    res.sendFile(getViewsDir('list.html'));
};

export const getTodosApi = async (req, res) => {
    try {
        const todos = await readStore();
        
        res.setHeader('Content-Type', 'application/json');
        res.json(todos);
    } catch(err) {
        res.json([]);
    }
};

export const deleteTodoItem = async (req, res) => {
    const { createdAt } = req.body;

    try {
        await deleteTodo(createdAt);
        return res.json([200])
    } catch(err) {
        return res.json([200])
    }
};

export const addNewItem = async (req, res, next) => {
    const input = req.body?.note?.trim();

    if (!input) {
        return res.redirect('/todo/add-new');
    }

    try {
        await addTodo(input);
        res.redirect('/todo/list');
    } catch(err) {
        res.redirect('/todo/add-new');
    }
};