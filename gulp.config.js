module.exports = function () {
    var client = './src/client/';
    var srcApp = client + 'app/';
    
    var config = {
        port: 3000,
        alljs: ['*.js', 'src/**/*.js'],
        serverPath: './src/server/serve.js',
        jsSource: [
            srcApp + '**/*module*.js',
            srcApp + '/**/*controller*.js',
            srcApp + '/**/*.js'
        ],
        injectSource: [
            srcApp + '/**/*module*.js',
            srcApp + '/**/*controller*.js',
            srcApp + '/**/*.js',
            client + 'static/css/*.css'
        ],
        build: './build',
        indexSrc: srcApp + 'index.html',
        fonts: client + 'static/fonts/*.*',
        buildStatic: './build/static/',
        srcClient: client,
        srcApp: srcApp,
        sass: client + 'sass/**/*.scss',
        destCss: client + 'static/css/',
    };
    return config;
};