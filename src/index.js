import { readFileSync } from 'fs';
import { resolve, extname } from 'path';
import parse from './parsers.js';
import formatter from './formatters/index.js';
import compare from './compare.js';

const getTypeFile = (filepath) => extname(filepath).slice(1);
const getData = (filepath) => parse(readFileSync(filepath, 'utf-8'), getTypeFile(filepath));
const buildFullPath = (filepath) => resolve(filepath);

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const obj1 = getData(buildFullPath(filePath1));
  const obj2 = getData(buildFullPath(filePath2));
  const tree = compare(obj1, obj2);
  return formatter(tree, format);
};

export default genDiff;
