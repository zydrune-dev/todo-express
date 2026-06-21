import express from 'express';
import path from 'path';
import { rootDir } from './utils/path.js'
import todoRoutes from './routes/todo.js'
import { showHomePage, show404Page } from './controllers/appControllers.js';
import { initDb } from './utils/database.js'

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(rootDir, 'public')));

app.get('/', showHomePage);

app.use('/todo', todoRoutes);

app.use(show404Page);

(async() => {
    try {
        await initDb();
        app.listen(PORT, () => {
            console.log(`Example app listening on port ${PORT}`)
        });
    } catch(error) {
        console.log(error);
    } 
})();