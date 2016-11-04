/*global require, console*/
var gulp = require("gulp"),
    webserver = require("gulp-webserver");
    
// Servidor web de desarrollo
gulp.task("dev-server", function () {
    "use strict";

    gulp.src("./app")
        .pipe(webserver({
            open: true,
            livereload: true
        }));
});

gulp.task("default", ["dev-server"]);