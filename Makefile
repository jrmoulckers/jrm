start:
	npm start
	< nul

full-start:
	npm install
	npm start
	< nul

install:
	npm install
	< nul

full-install:
	rm -rf node_modules
	npm install
	< nul