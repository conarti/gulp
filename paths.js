const { resolve } = require('path');

const getPaths = (src, build) => {
	const makePath = (type, path = '') => resolve(__dirname, type, path);

	return {
		SCSS_ENTRY: makePath(src, 'scss/index.scss'),
		PUG_ENTRY: makePath(src, '*.pug'),
		SVG_ENTRY: makePath(src, 'assets/**/*.svg'),
		JS_ENTRY: makePath(src, 'index.js'),
		IMAGES_DIR: makePath(src, 'assets/images/**/*'),
		STYLE_BUILD_DIR: makePath(build),
		IMAGES_BUILD_DIR: makePath(build, 'images'),
		SCSS_WATCH: makePath(src, 'scss/**/*'),
		PUG_WATCH: makePath(src, '**/*.pug'),
		JS_WATCH: makePath(src, '**/*.js'),
		SVG_WATCH: makePath(src, 'assets/**/*.svg'),
		IMG_WATCH: makePath(src, 'assets/images/**/*'),
	};
};

module.exports = getPaths;
