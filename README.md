### Hexlet tests and linter status:

[![Actions Status](https://github.com/Klepask/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Klepask/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/5b5f3f1a76cb288ab1ff/maintainability)](https://codeclimate.com/github/Klepask/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/5b5f3f1a76cb288ab1ff/test_coverage)](https://codeclimate.com/github/Klepask/frontend-project-46/test_coverage)

[![Github Actions](https://Klepask/frontend-project-46/actions/workflows/github-actions.yml/badge.svg)](https://github.com/Klepask/frontend-project-46/actions/workflows/github-actions.yml)

# «Вычислитель отличий»

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Поддерживает форматы: 

- json
- yml/yaml
Результат сравнения можно отформатировать в:
- JSON
- plain
- stylish

## Минимальные системные требования
node.js

### Установка

Необходима установка node.js
```
make install

$ git clone https://github.com/Klepask/frontend-project-46
```
### Запуск

Показать справку gendiff путь до файла №1 путь до файла №2.
```
gendiff -h 
```

[![asciicast](https://asciinema.org/a/H6QvQwM3m3E8Gg0HGpy6KWTy8.svg)](https://asciinema.org/a/H6QvQwM3m3E8Gg0HGpy6KWTy8)

Сравнение двух JSON файлов.
```
gendiff file1.json file2.json 
```

[![asciicast](https://asciinema.org/a/xjiIvUeywmfcRStAGegffJR5V.svg)](https://asciinema.org/a/xjiIvUeywmfcRStAGegffJR5V)

Сравнение двух YAML файлов.
```
gendiff file1.yml file2.yml
```

[![asciicast](https://asciinema.org/a/3KhlTbR1raa2dwdWedh0mPSgI.svg)](https://asciinema.org/a/3KhlTbR1raa2dwdWedh0mPSgI)

Сравнение двух файлов в простом текстовом формате.
```
gendiff --format plain
```

[![asciicast](https://asciinema.org/a/VI5zrRpQZ6vzw7odYrMPsDI3X.svg)](https://asciinema.org/a/VI5zrRpQZ6vzw7odYrMPsDI3X)

Сравнение двух файов в формате JSON.
```
gendiff --format json
```

[![asciicast](https://asciinema.org/a/gW5dxmvEWRmSZGmJaHfrAxbZf.svg)](https://asciinema.org/a/gW5dxmvEWRmSZGmJaHfrAxbZf)
