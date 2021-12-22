serve:
	gulp serve

install:
	npm install

remove-git:
	rm -rf .git

git-init:
	git init

sprite:
	gulp makeSprite

build:
	gulp build

setup: install remove-git git-init
