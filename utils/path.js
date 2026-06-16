import path from 'path';

export const rootDir = process.cwd();

export const getViewsDir = (fileName) => path.join(rootDir, 'views', fileName);

export const getDataDir = (fileName) => path.join(rootDir, 'data', fileName);