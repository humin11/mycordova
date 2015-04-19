// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-04-18 using
// generator-karma 0.9.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: './',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'www/vendor/**/angular.js',
      'www/vendor/**/angular-mocks.js',
      'www/vendor/**/angular-animate.js',
      'www/vendor/**/angular-sanitize.js',
      'www/vendor/**/angular-ui-router.js',
      'www/vendor/**/angular-resource.js',
      'www/vendor/**/angular-cookies.js',
      'www/vendor/ionic/release/**/ionic.js',
      'www/vendor/ionic/release/**/ionic-angular.js',
      'www/js/**/*.js',
      'test/spec/controller/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [
      'karma.conf.js',
      'docs.config.js'
    ],

    // web server port
    port: 9080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    reporters: ['progress','coverage'],
    preprocessors : {'src.js': 'coverage'},
    coverageReporter: {
        type : 'html',
        dir : 'coverage/'
    },
    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
