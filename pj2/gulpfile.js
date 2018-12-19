const gulp = require('gulp');
const babel = require('gulp-babel');
// gulp dependency 를 여기에 쓴다

gulp.task('default', function() {
  // node source
  gulp.src('es6/**/*.js')  // 변환하려는 파일 지정. ** 모든 중간 디렉터리 포함
    .pipe(babel())  // 바벨에 파이프 연결. 바벨은 es6를 es5로 변환.
    .pipe(gulp.dest('dist'));  // 컴파일된 es5 코드를 dist 디렉토리에 저장. 걸프는 소스 파일 이름과 디렉터리 구조를 유지.
  gulp.src('public/es6/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('public/dest'));

});
