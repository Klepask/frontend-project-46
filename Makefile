install:
	npm ci

publish:
	npm publish --dry-run

make lint:
	npx eslint .

gendiff:
	node bin/gendiff.js	

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage

test-coverage:
	npx jest --coverage
