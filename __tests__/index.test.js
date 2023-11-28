import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '.', '__fixtures__', filename);