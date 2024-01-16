import fs from 'fs';
import path from 'path';
import getParsedData from './parsers.js';
import compare from './compare.js';
import formatter from './formatters/index.js';
import process from 'process';

const getFullPath = (filePath) => {
  return path.resolve(process.cwd(), filePath);
}
const parseFile = (filePath) => {
  const fullPath = getFullPath(filePath);
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  const fileExt = path.extname(filePath).slice(1);
  return getParsedData(fileContent, fileExt);
};

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const file1Data = parseFile(filepath1);
  const file2Data = parseFile(filepath2);
  const diff = compare(file1Data, file2Data);
  return formatter(diff, `.${format}`);
};

export default gendiff;
