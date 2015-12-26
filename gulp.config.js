module.exports = function () {
    var client = './src/client/';
    
    var config = {
        port: 3000,
        alljs: ['*.js', 'src/**/*.js'],
        serverPath: './src/server/serve.js',
        jsSource: [
            client + 'app/**/*module*.js',
            client + 'app/**/*controller*.js',
            client + 'app/**/*.js'
        ],
        injectSource: [
            './src/client/app/**/*module*.js',
            './src/client/app/**/*controller*.js',
            './src/client/app/**/*.js',
            './src/client/styles/*.css'
        ],
        index: './src/client/index.html',
        build: './build',
        sass: client + 'styles/sass/**/*.scss',
        destCss: client + 'styles'
    };
    return config;
};