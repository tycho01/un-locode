let gulp = require('gulp');
let Papa = require('papaparse');

let csv = require('./data/code-list.csv');
let parsed = Papa.parse(csv, { header: true });
console.log(parsed);

gulp.task('parse', () => {
  gulp.src('data/*.csv')
  .pipe((csv) => Papa.parse(csv, { header: true }))
  .pipe(gulp.dest('./data'))
});
