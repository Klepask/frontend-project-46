import _ from 'lodash';

const indent = (depth, type = 'first') => {
  const replacer = ' ';
  const spacesCount = 4;
  const currentSpace = spacesCount * depth;
  return type === 'last' ? replacer.repeat(currentSpace - spacesCount) : replacer.repeat(currentSpace - 2);
};

const stringify = (node, depth) => {
  if (!_.isObject(node)) {
    return String(node);
  }

  const strings = Object.entries(node);
  const result = strings.map(([key, value]) => `${indent(depth + 1)}  ${key}: ${stringify(value, depth + 1)}`);

  return `{\n${result.join('\n')}\n  ${indent(depth)}}`;
};

const iter = (node, depth) => {
  const result = node.map((item) => {
    const { type } = item;
    switch (type) {
      case 'deleted':
        return `${indent(depth)}- ${item.key}: ${stringify(item.value, depth)}`;
      case 'unchanged':
        return `${indent(depth)}  ${item.key}: ${stringify(item.value, depth)}`;
      case 'changed': {
        const value1 = `${indent(depth)}- ${item.key}: ${stringify(item.value1, depth)}`;
        const value2 = `${indent(depth)}+ ${item.key}: ${stringify(item.value2, depth)}`;
        return `${value1}\n${value2}`;
      }
      case 'added':
        return `${indent(depth)}+ ${item.key}: ${stringify(item.value, depth)}`;
      case 'nested':
        return `${indent(depth)}  ${item.key}: ${iter(item.children, depth + 1)}`;
      default:
        throw new Error(`Unknown type: '${type}'!`);
    }
  });
  return `{\n${result.join('\n')}\n${indent(depth, 'last')}}`;
};

const formatStylish = (tree) => iter(tree, 1);

export default formatStylish;
