import fs from 'fs';
import path from 'path';
import getParsedData from './parsers.js'; 
import compare from './compare.js';
import formatter from './formatters/index.js';

const readFile = (filePath) => {
  const ext = getExt(filePath);
  const fileContent = fs.readFileSync(path.resolve(process.cwd(), filePath), 'utf8');
  return getParsedData(fileContent, ext); 
}

const getExt = (filePath) => path.extname(filePath);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const obj1 = readFile(filepath1); 
  const obj2 = readFile(filepath2);
  const tree = compare(obj1, obj2);
  return formatter(tree, format);  
};

export default genDiff;
