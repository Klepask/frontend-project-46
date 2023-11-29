import getParsedData from './parsers.js';
import compare from './utils.js';
import formatter from './formatters/index.js';
import { readFile, getExt } from './utils.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);
  const ext1 = getExt(filepath1);
  const ext2 = getExt(filepath2);

  const obj1 = getParsedData(file1, ext1);
  const obj2 = getParsedData(file2, ext2);
  const tree = compare(obj1, obj2);
  return formatter(tree, format);
};

export default genDiff;
