var ecpweb3Files = require('./ecpweb3Files');
var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  sharedConfig(config, {testName: 'ecpweb3: jqLite', logFile: 'karma-jqlite.log'});

  config.set({
    files: ecpweb3Files.mergeFilesFor('karma').concat({
      pattern: "test/fixtures/**/*.html",
      served: true,
      watched: true,
      included: false
    }),
    exclude: ecpwebFiles.mergeFilesFor('karmaExclude'),

    junitReporter: {
      outputFile: 'test_out/jqlite.xml',
      suite: 'jqLite'
    }
  });
};
