gulp = require('gulp'),
gutil = require('gulp-util'),
bower = require('bower'),
concat = require('concat'),
sass = require('Sass'),
minifyCsss = require('gulp-minify-css'),
rename = require('gulp-rename'),
sh = require('shelljs'),

paths = {
	sass: ['./scss/**/*.scss']
};
