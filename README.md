Fully customisable gulp template.  
Check branches if you need additional dependencies like `bootstrap`, `postcss`, etc.

### Setup project:
```shell
cd path/to/dir # open project folder OR open terminal at project folder and follow next steps
git clone https://github.com/conarti/gulp.git . # clone repository in current folder
make setup # install dependencies -> setup git
# then create new repo at github.com and add remote origin url
```
or use as template.

### Guide:
#### Svg and icons
> Place your svg files to `assets` folder and they will be automatically compiled into a `sprite.svg`  
If you place `test.svg` into `assets/example`, svg will get `example--test` id in `sprite.svg`.  
Use `icon.pug` mixin to include any icons that stored in `assets/icons` folder.  
If you want to change icons folder, don't forget update href in `icon.pug`.

#### Public folder
> For static files that don't need to compile, use `public` folder.
