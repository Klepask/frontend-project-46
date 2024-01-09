import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename); // путь к фикстурам
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8'); // чтение фикстур

const extension = ['yml', 'json'];
const expectedStylish = readFile('expected_stylish.txt');
const expectedPlain = readFile('expected_plain.txt');
const expectedJson = readFile('expected_json.txt');

test.each(extension)('test %s format', (ext) => {
  const file1 = getFixturePath(`file1.${ext}`);
  const file2 = getFixturePath(`file2.${ext}`);

  expect(genDiff(file1, file2, 'stylish')).toBe(expectedStylish);
  expect(genDiff(file1, file2, 'json')).toBe(expectedJson);
  expect(genDiff(file1, file2, 'plain')).toBe(expectedPlain);
  expect(genDiff(file1, file2)).toBe(expectedStylish);
});
