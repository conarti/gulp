install:
	npm install

remove-git:
	rm -rf .git

git-init:
	git init
	git add .
	git commit -am 'project init'

setup: install remove-git git-init
