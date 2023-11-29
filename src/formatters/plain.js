const getValueString = (value) => {
  if (typeof value !== 'object' || value === null) {
    return typeof value === 'string' ? `'${value}'` : `${value}`;
  }
  
  return '[complex value]';
};

function plain(tree) {

  const iter = (nodes, path) => {  
    const lines = nodes
      .filter(node => node.type !== 'unchanged')
      .map(node => {

        const key = [...path, node.key].join('.');
      
        switch(node.type) {
          case 'deleted':
            return `Property '${key}' was removed`;
          case 'added':
            return `Property '${key}' was added with value: ${getValueString(node.value)}`;
          case 'changed':
            return `Property '${key}' was updated. From ${getValueString(node.value1)} to ${getValueString(node.value2)}`;  
          case 'nested':
            return iter(node.children, `${key}.`);
        }
      });

    return lines.join('\n'); 
  };
  
  return iter(tree, '');
}

export default plain;
