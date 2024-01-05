import fs from 'fs';
import path from 'path';

const readFile = (filePath) => fs.readFileSync(path.resolve(process.cwd(), filePath), 'utf8');
const getExt = (filePath) => path.extname(filePath);

export { readFile, getExt };
