import _ from 'lodash';

const compare = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);

  const sortKeys = _.sortBy(_.union(keys1, keys2));

  return sortKeys.map((key) => {
    if (!Object.hasOwn(data1, key)) {
      return {
        key,
        value: data2[key],
        type: 'added',
      };
    }

    const value1 = data1[key]; // теперь определение value1 находится после проверки наличия ключа в data1

    if (!Object.hasOwn(data2, key)) {
      return {
        key,
        value: value1,
        type: 'deleted',
      };
    }

    const value2 = data2[key]; // определяем value2 для дальнейшего использования.

    if (_.isObject(value1) && _.isObject(value2)) {
      return {
        type: 'nested',
        key,
        children: compare(value1, value2),
      };
    }

    if (value1 !== value2) {
      return {
        key,
        value1,
        value2,
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
