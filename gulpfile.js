var gulp = require('gulp'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	clean = require('gulp-clean'),  	
  sourcemaps = require('gulp-sourcemaps'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify'),
  notify = require('gulp-notify'),
  _ = require('lodash'),
  mergeStream = require('merge-stream'),
  minifyCss = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  ts = require('gulp-typescript'),
  tsProject = ts.createProject('./js/tsconfig.json');

var basePath = './';

var paths = {  
  sass: 		    basePath + 'sass/',
  css:          basePath + 'static/css/',
  scripts:      basePath + 'js/',
  dist:         basePath + 'static/'  
};

var bundleConfigs = [{
  entries: paths.scripts + 'app.js',
  dest: paths.dist,
  outputName: 'bundle.js',
  paths: []
}];

function onError() {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
      title: "Compile Error",
      message: "<%= error %>"
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
}

gulp.task('clean', function() {
  return gulp.src([paths.css, paths.dist + bundleConfig[0].outputName], {read: false})
  	.pipe(clean());
});

gulp.task('typescript', function() {
  var tsResult = tsProject.src()
        .pipe(ts(tsProject));
 
  return tsResult.js.pipe(gulp.dest(paths.scripts));
});

gulp.task('scripts', ['typescript'],function() {
  function browserifyMe(bundleConfig) {
    var b = browserify(bundleConfig);
    return b.bundle()
      .on('error', onError)
      .pipe(source(bundleConfig.outputName))
      .pipe(gulp.dest(bundleConfig.dest));  
  }

  return mergeStream.apply(gulp, _.map(bundleConfigs, browserifyMe));  
});

gulp.task('uglifyJs', function() {
  return gulp.src(paths.dist + '*.js')
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('styles', function() {  
  return gulp.src(paths.sass + 'styles.scss')          
  	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))            
    .pipe(sourcemaps.write()) 
    .pipe(gulp.dest(paths.css));
});

gulp.task('minifyCss', function() {  
  return gulp.src(paths.css + 'styles.css')     
    .pipe(minifyCss({processImport: false}))    
    .pipe(gulp.dest(paths.css));
});

gulp.task('watch', ['default'], function() {  
  gulp.watch(paths.scripts + '*.js', ['scripts']);
  gulp.watch(paths.sass + '**/*.scss', ['styles']);  
});

gulp.task('default', ['scripts', 'styles']);
gulp.task('production', ['default'], function() {
  gulp.start('minifyCss');
  gulp.start('uglifyJs');
});