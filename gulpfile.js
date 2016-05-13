'use strict';

var gulp = require('gulp');
// var del = require('del');
var ts = require('gulp-typescript');
let webpack = require('gulp-webpack');
// var notify = require('gulp-notify');

// gulp.task('clean', (callback) => del(['./dist'], callback));
var tsConfig = {
  declaration: true,
  noExternalResolve: true,
  experimentalDecorators: true
};

gulp.task('compileTs', () => {
  return gulp.src('demo/**/*.ts')
    .pipe(ts(tsConfig))
    .pipe(gulp.dest('./demo/'));
});
// gulp.task('watch', (callback) => {
//   gulp.watch('src/**/*', gulp.series('copyServer', 'reserve'));

//   gulp.watch('assets/**/*', gulp.series('copyAssets'));

//   gulp.watch('static/**/*', gulp.series(gulp.parallel('copyStatic', 'copyStaticJs'), () =>
//     gulp.src('./src/index.js')
//       .pipe(notify('Static files updated.'))
//   ));

//   callback();
// });

gulp.task('buildComponents', () => {
  return gulp.src('./src/ng2-semantic.ts')
    .pipe(webpack({
      // watch: true,
      module: {
        loaders: [
          {
            test: /\.ts$/, loader: 'ts', query: {
              compilerOptions: {
                removeComments: true,
                noEmitHelpers: false
              }
            }
          },
        ],
      },
      output: {
        filename: 'ng2-semantic.js'
      }
    }))
    .pipe(gulp.dest('dist/'));
});


gulp.task('default', gulp.series('buildComponents', 'compileTs'));