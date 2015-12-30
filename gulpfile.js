var gulp = require('gulp');
var args = require('yargs').argv;
var $ = require('gulp-load-plugins')({ lazy: true });

var config = require('./gulp.config.js')();

gulp.task('hint', function () {
    console.log('Analyzing code.');
    return gulp
        .src(config.jsSource)
        .pipe($.jshint('./.jshintrc'))
        .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('fonts', function () {
    console.log('\t(i)Copying fonts');
    return gulp
        .src(config.fonts)
        .pipe(gulp.dest(config.buildPublic + 'fonts'));
});

gulp.task('compile-sass', function () {
    console.log('\t(i)Compiling sass.');
    var dest = args.dev ? config.srcCss : config.buildPublic + 'css';
    return gulp
        .src(config.sass)
        .pipe($.sass({ outputStyle: 'compressed' })
            .on('error', $.sass.logError))
        .pipe(gulp.dest(dest));
});

gulp.task('stage', function () {
    console.log('\t(i)Staging script files.');
    var dest = args.dev ? config.srcApp : config.buildApp;
    return gulp
        .src(config.jsSource)
        .pipe($.ngAnnotate({ add: true, single_quotes: true }))
        .pipe($.if(!args.dev, $.uglify()))
        .pipe(gulp.dest(dest));
});

gulp.task('inject', gulp.series('stage', function () {
    console.log('\t(i)Injecting source files into index.html.');
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');
    var injectOptions = args.dev ? {} : {
        ignorePath: config.srcApp
    };
    var injectSrc = gulp.src(config.injectSource, { read: false });
    var options = {
        json: require('./bower.json'),
        directory: './bower_components/',
        ignorePath: '../..'
    };
    var dest = args.dev ? config.srcPublic : config.buildPublic;
    return gulp
        .src(config.indexSrc)
        .pipe(inject(injectSrc, injectOptions))
        .pipe(wiredep(options))
        .pipe(gulp.dest(dest));
}));

gulp.task('serve', gulp.series(
    gulp.parallel('hint', 'inject', 'compile-sass'),
    function () {
        serve(args.dev);
    }));

gulp.task('test', function (done) {
    console.log('Gulp test: simple test was successful.');
    done();
});

// Functions. //
function serve(isDev) {
    var nodeOptions = {
        script: config.serverPath,
        delayTime: 1,
        env: {
            'PORT': config.port,
            'NODE_ENV': isDev ? 'development' : 'production'
        },
        watch: config.alljs
    };
    return $.nodemon(nodeOptions)
        .on('restart', gulp.series('hint', function () {
            console.log('Nodemon restarted');
        }));
}