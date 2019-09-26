// Karma configuration
// Generated on Sun Nov 05 2017 16:19:33 GMT+0800 (中国标准时间)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './unit/**/*.spec.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './unit/**/*.spec.js':['webpack']
    },

    webpack:{
      module: {
        rules: [{
          test: /\.js$/,
          use: {
              loader: 'istanbul-instrumenter-loader',
              options: { esModules: true }
          },
          enforce: 'pre',
          exclude: /node_modules|\.spec\.js$/,
        },
        {
          test: /\.js$/,
          use: {
              loader: 'babel-loader',
              options: {
                  presets: ['env'],
                  plugins: ['istanbul']
              }
            },
            exclude: /node_modules/
        }]
      }
    },
    

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['coverage-istanbul'],
    coverageIstanbulReporter: {
      reports: ['html', 'text-summary'],
      dir: 'coverage/',
      fixWebpackSourcePaths: true,
      skipFilesWithNoCoverage: true,
      'report-config': {
        html: {
          subdir: 'html'
        }
      }
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}