var cdnizer = require("gulp-cdnizer");
gulp.task('default', function() {
    fs.writeFileSync("./preferences.json", {a:1,b:2});
});