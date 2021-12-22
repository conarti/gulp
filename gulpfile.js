const { src, dest, parallel, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();
const aliases = require('gulp-style-aliases');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const svgSprite = require('gulp-svg-sprite');
const getPaths = require('./paths.js');

const SRC_DIR = 'src';
const BUILD_DIR = 'build';

const paths = getPaths(SRC_DIR, BUILD_DIR);

const sassAliasesConfig = {
	'~': './node_modules/'
};

const jsDependencies = [];

const svgConfig = {
	mode: {
		stack: {
			sprite: '../sprite.svg'
		}
	},
};

const sassCompile = () => {
	return src(paths.SCSS_ENTRY)
		.pipe(aliases(sassAliasesConfig))
		.pipe(sass())
		.pipe(dest(paths.STYLE_BUILD_DIR))
		.pipe(browserSync.stream());
};

const pugCompile = () => {
	return src(paths.PUG_ENTRY)
		.pipe(pug())
		.pipe(dest(BUILD_DIR))
		.pipe(browserSync.stream());
};

const browserSyncJob = () => {
	browserSync.init({
		server: BUILD_DIR
	});

	watch(paths.SCSS_WATCH, sassCompile);
	watch(paths.PUG_WATCH, pugCompile);
};

const imageCompile = () => {
	return src(paths.IMAGES_DIR)
		.pipe(dest(paths.IMAGES_BUILD_DIR));
};

const scriptsCompile = () => {
	return src(jsDependencies)
		.pipe(concat('index.js'))
		.pipe(dest(BUILD_DIR));
};

const makeSprite = () => {
	return src(paths.SVG)
		.pipe(svgSprite(svgConfig))
		.pipe(dest(BUILD_DIR))
		.pipe(browserSync.stream());
};

const cleanBuild = () => {
	return src(`${BUILD_DIR}/*`)
		.pipe(clean());
};

const build = series(cleanBuild, parallel(sassCompile, pugCompile, scriptsCompile, makeSprite, imageCompile));

exports.default = series(build, browserSyncJob);
exports.serve = series(build, browserSyncJob);
exports.makeSprite = makeSprite;
exports.clean = cleanBuild;
exports.build = build;
