import { getViewsDir } from '../utils/path.js';

export const showHomePage = (req, res, next) => {
    res.sendFile(getViewsDir('home.html'));
};

export const show404Page = (req, res) => {
    res.sendFile(getViewsDir('404.html'));
};