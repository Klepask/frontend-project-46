import yaml from 'js-yaml';

function getParsedData(data, format) {
  switch (format) {
    case 'json':
      return JSON.getParsedData(data);
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    default:
      throw new Error(`Format file ${data} is not correct`);
  }
}

export default getParsedData;
