import path from 'path';
import { rootDir, getViewsDir } from '../utils/path.js';

export const showHomePage = (req, res, next) => {
    res.sendFile(getViewsDir('home.html'));
};

export const show404Page = (req, res) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));
};