import _ from 'lodash';

const compare = (data1, data2) => {

  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  
  const sortKeys = _.sortBy(_.union(keys1, keys2));

  return sortKeys.map((key) => {
    
    const value1 = data1[key];

    if (!Object.hasOwn(data1, key)) {
      if (Object.hasOwn(data2, key)) {
        return {
          key,
          value: data2[key],
          type: 'added',
        };
      }
      return {
        key,
        type: 'added',  
      };
    }

    if (!Object.hasOwn(data2, key)) {
      return {
        key,
        value: value1,
        type: 'deleted',
      };
    }

    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { 
        type: 'nested',
        key,
        children: compare(value1, data2[key]),  
      };
    }

    if (value1 !== data2[key]) {
      return {
        key, 
        value1,
        value2: data2[key],  
        type: 'changed',
      };
    }

    return {
      key,
      value: value1,
      type: 'unchanged',
    };
  });

};

export default compare;
