var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  sharedConfig(config, {testName: 'ecpweb3: docs', logFile: 'karma-docs.log'});

  config.set({
    files: [
      'build/ecpweb3.js',
      'build/ecpweb3-mocks.js',
      'docs/app/src/**/*.js',
      'docs/app/test/**/*Spec.js'
    ],

    junitReporter: {
      outputFile: 'test_out/docs.xml',
      suite: 'Docs'
    }
  });
};
