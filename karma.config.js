const webpackConfig = require('./webpack.config.js');
webpackConfig.mode = 'production';

module.exports = function(config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine', 'karma-typescript'],
        files: [
            { pattern: 'src/**/*.+(ts|tsx)' },
            { pattern: 'src/**/*.ts' },
        ],
        exclude: [
            'node_modules/'
        ],
        preprocessors: {
            '**/*.+(ts|tsx)': ['karma-typescript'],
        },
        reporters: ['progress', 'karma-typescript'],

        karmaTypescriptConfig: {
            bundlerOptions: {
                entrypoints: /\.spec\.ts$/,
            },
            compilerOptions: {
                jsx: 'react',
                module: 'commonjs',
                sourceMap: true,
                target: 'ES5',
                lib: ['DOM', 'ES2016'],
            },
            include: [
                'src/**/*.ts',
            ],
        },
        junitReporter: {
            outputDir: './',
            outputFile: 'test-results.xml',
        },


        port: 9876,
        colors: true,
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        autoWatch: false,
        singleRun: true,

        browsers: ['ChromeHeadless'],

        coverageReporter: {
            instrumenterOptions: {
                istanbul: { noCompact: true }
            }
        }
    });
};
