import express from 'express';
import path from 'path';
import { rootDir, getViewsDir } from './utils/path.js'
import todoRoutes from './routes/todo.js'

const PORT = 3000;

const app = express();

app.use(express.static(path.join(rootDir, 'public')));

app.get('/', (req, res, next) => {
    res.sendFile(getViewsDir('home.html'));
});

app.use('/todo', todoRoutes);

app.use((req, res) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));
});
  
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
});