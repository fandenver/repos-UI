export const copy = () => {
    return app.gulp.src(app.path.src.js)
        .pipe(app.gulp.dest(app.path.build.js))
}
