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
            client + 'public/css/*.css'
        ],
        build: './build/',
        indexSrc: client + 'public/index.html',
        fonts: client + 'static/fonts/*.*',
        srcPublic: './src/client/public/',
        buildPublic: './build/public/',
        srcClient: client,
        srcApp: srcApp,
        buildApp: './build/app/',
        sass: client + 'sass/**/*.scss',
        srcCss: client + 'public/css/'
    };
    return config;
};