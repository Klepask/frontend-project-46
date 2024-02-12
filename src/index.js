import fs from 'fs';
import process from 'process';
import path from 'path';
import getParsedData from './parsers.js';
import compare from './compare.js';
import formatter from './formatters/index.js';

const getFullPath = (filePath) => path.resolve(process.cwd(), filePath);

const parseFile = (filePath) => {
  const fullPath = getFullPath(filePath);
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  const fileExt = path.extname(filePath).slice(1);
  return getParsedData(fileContent, fileExt);
};

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);
  const diff = compare(data1, data2);
  return formatter(diff, `${format}`);
};

export default gendiff;
