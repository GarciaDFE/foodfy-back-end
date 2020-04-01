"use strict";

// Importando plugins utilizados no projeto
const gulp = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");

// Compilar SASS gerando CSS na pasta SRC
function compilaSASS() {
  return gulp
    .src(["src/scss/styles.scss"])
    .pipe(sass())
    .pipe(gulp.dest("src/css"));
}

// Agrupar tarefas a serem monitoradas
function watch() {
  gulp.watch("src/scss/**/*.scss", compilaSASS);
}

// Agrupar e executar tarefas
const build = gulp.parallel(
  compilaSASS,
  watch
);
gulp.task("default", build);
