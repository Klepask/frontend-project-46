import _ from 'lodash';

const symbols = {
  unchanged: ' ',
  added: '+ ',
  deleted: '- ',
};

const getIndent = (depth, replacer = ' ', spacesCount = 4) => 
  replacer.repeat(spacesCount * depth);

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return `${value}`; 
  }

  const lines = Object.entries(value).map(([key, val]) =>
    `${getIndent(depth + 1)}${key}: ${stringify(val, depth + 1)}`  
  );

  return ['{', ...lines, `${getIndent(depth + 1)}}`].join('\n');
};


const stylish = (ast) => {

  const iter = (node, depth) => {
    const lines = node.map(item => {
      switch(item.type) {
        case 'deleted':
          return `${getIndent(depth)}${symbols.deleted}${item.key}: ${stringify(item.value, depth)}`;
        case 'added':
          return `${getIndent(depth)}${symbols.added}${item.key}: ${stringify(item.value, depth)}`;
        case 'changed':
          return (`${getIndent(depth)}- ${item.key}: ${stringify(item.value1, depth)}\n${getIndent(depth)}+ ${item.key}: ${stringify(item.value2, depth)}`);
        case 'unchanged':
          return `${getIndent(depth)}${symbols.unchanged}${item.key}: ${stringify(item.value, depth)}`;
        case 'nested':
          return `${getIndent(depth)}${symbols.unchanged}${item.key}: ${iter(item.children, depth + 1)}`;  
      }
    });

    return ['{', ...lines, `${getIndent(depth)}}`].join('\n');
  }

  return iter(ast, 1);  
}

export default stylish;
