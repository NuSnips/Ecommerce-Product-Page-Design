const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const prefix = require("gulp-autoprefixer");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browserSync = require("browser-sync").create();

//Sass task
function scssTask() {
  return src("app/scss/**/*.scss", { sourcemaps: true })
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(prefix("last 2 versions"))
    .pipe(postcss([cssnano()]))
    .pipe(dest("dist", { sourcemaps: "." }));
}

// Javascript task
function jsTask() {
  return src("app/js/*.js", { sourcemaps: true })
    .pipe(terser())
    .pipe(dest("dist", { sourcemaps: "." }));
}

//BrowserSync Task
function browserSyncServe(cb) {
  browserSync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}

//Watch Task
function watchTask() {
  watch("*.html", browserSyncReload);
  watch(
    ["app/scss/**/*.scss", "app/js/**/*.js"],
    series(scssTask, jsTask, browserSyncReload)
  );
}

function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

//Default gulp task
exports.default = series(
  scssTask,
  jsTask,
  browserSyncServe,
  browserSyncReload,
  watchTask
);
