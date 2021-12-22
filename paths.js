const { resolve } = require('path');

const getPaths = (src, build) => {
	const makePath = (type, path = '') => resolve(__dirname, type, path);

	return {
		STYLE_BUILD_DIR: makePath(build),
		SCSS_ENTRY: makePath(src, 'scss/index.scss'),
		SCSS_WATCH: makePath(src, 'scss/**/*'),
		PUG_ENTRY: makePath(src, '*.pug'),
		PUG_WATCH: makePath(src, '**/*.pug'),
		SVG: makePath(src, 'assets/icons/**/*.svg'),
		IMAGES_DIR: makePath(src, 'assets/images/**/*'),
		IMAGES_BUILD_DIR: makePath(build, 'images'),
	};
};

export default getPaths;
