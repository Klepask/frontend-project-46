import fs from 'fs';
import path from 'path';
import getParsedData from './parsers.js';
import compare from './compare.js';
import formatter from './formatters/index.js';

const readAndParseFile = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const fileExt = path.extname(filePath).slice(1);
  return getParsedData(fileContent, fileExt);
};

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const file1Parsed = readAndParseFile(filepath1);
  const file2Parsed = readAndParseFile(filepath2);
  const diff = compare(file1Parsed, file2Parsed);
  return formatter(diff, `.${format}`);
};

export default gendiff;
