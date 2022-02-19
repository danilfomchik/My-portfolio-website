const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const concat = require('gulp-concat');

function style() {
    return gulp.src('./scss/**/*.scss').pipe(sass()).pipe(gulp.dest('./css')).pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        ghostMode: { clicks: false },
		notify: false,
		online: true,
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload);
}

function scripts() {
	return src('./js/*.js')
		.pipe(webpackStream({
			mode: 'production',
			performance: { hints: false },
			plugins: [
				new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery' }), // jQuery (npm i jquery)
			],
			module: {
				rules: [
					{
						test: /\.m?js$/,
						exclude: /(node_modules)/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env'],
								plugins: ['babel-plugin-root-import']
							}
						}
					}
				]
			},
			optimization: {
				minimize: true,
				minimizer: [
					new TerserPlugin({
						terserOptions: { format: { comments: false } },
						extractComments: false
					})
				]
			},
		}, webpack)).on('error', function handleError() {
			this.emit('end')
		})
		.pipe(concat('app.min.js'))
		.pipe(dest('./js'))
		.pipe(browserSync.stream())
}

exports.style = style;
exports.watch = watch;
exports.scripts = scripts;