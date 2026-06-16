import { getDataDir } from '../utils/path.js';
import fs from 'node:fs/promises';

const FILE = getDataDir('todos.json');

export const readStore = async () => {
    const data = await fs.readFile(FILE, { encoding: 'utf8' });
    return JSON.parse(data);
}

export const addTodo = async (value) => {
    try {
        const parsedData = await readStore();
        const createdAt = new Date();
        parsedData.todo.push({'createdAt': createdAt.toISOString(), value});
    
        await fs.writeFile(FILE, JSON.stringify(parsedData));
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const deleteTodo = async (createdAt) => {
    try {
        const parsedData = await readStore();
        const data = parsedData.todo.filter((todo) => todo.createdAt != createdAt);
    
        await fs.writeFile(FILE, JSON.stringify({todo: data}));
    } catch (err) {
        console.log(err);
        throw err;
    }
}