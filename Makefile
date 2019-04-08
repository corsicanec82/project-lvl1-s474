install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

publish:
	npm login
	npm publish

lint:
	npx eslint .
