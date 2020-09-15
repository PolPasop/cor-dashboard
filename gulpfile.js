const { watch, series, parallel } = require('gulp');
const del = require('del');
const { rollup } = require('rollup');
const { babel } = require('@rollup/plugin-babel');
const reload = require('browser-sync/dist/public/reload');
const browserSync = require('browser-sync').create();
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const gulp = require('gulp');
const rename = require('gulp-rename');
const postcssimport = require('postcss-import');
const sourcemaps = require('gulp-sourcemaps');


const paths = {
  input: './src/',
  output: './dist/',
  reload: './public/',
  css: {
    src: 'src/scss/styles.scss',
    dest: 'dist/css'
  }
};

// Remove pre-existing content from output folders
const cleanDist = function (done) {
  del.sync([
    paths.output
  ]);

  return done();
}

async function bundle() {
  const bundle = await rollup({
    input: './src/components/cor-dashboard/cor-dashboard.js',
    plugins: [babel({ babelHelpers: 'bundled' })]
  });

  return bundle.write({
    file: './dist/cor-dashboard.bundle.js',
    format: 'iife',
    name: 'app'
  });
}

// CSS
function css() {
  var plugins = [
      postcssimport({ root: paths.css.src }),
      autoprefixer({overrideBrowserslist: ['>= 1%', 'last 1 major version', 'not dead', 'Explorer 11']}),
      cssnano()
  ];
  return gulp
      .src(paths.css.src)
      .pipe(sourcemaps.init())
      .pipe(sass({
          outputStyle: 'expanded'
      }))
      .pipe(postcss(plugins))
      .pipe(sourcemaps.write())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(paths.css.dest))
      .pipe(browserSync.stream());
}

// Static server
function startServer(done) {
  browserSync.init({
    server: {
      baseDir: "."
    }
  });

  done();
}

// Reload the browser when file changes
const reloadBrowser = function (done) {
  browserSync.reload();
  done();
}

// Watch for changes
const watchSource = function (done) {
  watch(paths.input, series(exports.default, reloadBrowser));
  done();
}

exports.default = series(
  cleanDist,
  bundle,
  css
);

exports.watch = series(
  exports.default,
  startServer,
  watchSource
);