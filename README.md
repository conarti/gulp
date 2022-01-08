Gulp template.
Check branches for get different project variants.

## Setup project:
```shell
$ cd path/to/dir # open project folder OR open terminal at project folder and follow next steps
$ git clone https://github.com/conarti/gulp.git . # clone repository in current folder
$ make setup # install dependencies -> setup git
# then create new repo at github.com and add remote origin url
```
or use as template.

## Deploy site:

This package uses [surge.sh](https://surge.sh) to deploy projects.

To manually deploy your site on the surge, use:
```shell
$ make deploy
```

To set up automatic deployment, set repository secrets `SURGE_DOMAIN` and `SURGE_TOKEN`.
You can get token by using:
```shell
$ npx surge token
```
