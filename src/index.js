import fs from 'fs';
import path from 'path';
import getParsedData from './parsers.js';
import compare from './compare.js';
import formatter from './formatters/index.js';

const readAndParseFile = (filePath) => {
  const fileContent = fs.readFileSync(path.resolve(process.cwd(), filePath), 'utf8');
  const fileExt = path.extname(filePath);
  return getParsedData(fileContent, fileExt);
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const obj1 = readAndParseFile(filepath1);
  const obj2 = readAndParseFile(filepath2);
  const tree = compare(obj1, obj2);
  return formatter(tree, format);
};

export default genDiff;
