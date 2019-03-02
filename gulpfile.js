/**
require('./gulp/tasks/styles.js');
require('./gulp/tasks/watch.js');
require('./gulp/tasks/images.js');
require('./gulp/tasks/html.js');
*/


// npm ERR! Refusing to delete /Users/evan/Dropbox/code/p-buttercupPortfolioClean/node_modules/.bin/mkdirp: is outside /Users/evan/Dropbox/code/p-buttercupPortfolioClean/node_modules/mkdirp and not a link
//npm ERR! File exists: /Users/evan/Dropbox/code/p-buttercupPortfolioClean/node_modules/.bin/mkdirp
//npm ERR! Move it away, and try again.

const { src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const watch = require('gulp-watch');
const autoprefixer = require('autoprefixer');
const importtt = require('postcss-import');
const nested = require('postcss-nested');

exports.default = function() {
  return src('src/html/*.html')
    .pipe(dest('build/html'));
}

function defaultTask(foo) {
	function foo() {
  	return src('src/html/*.html')
    	.pipe(dest('build/html'));
	}
}
exports.default = defaultTask;