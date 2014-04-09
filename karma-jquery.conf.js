var ecpweb3Files = require('./ecpweb3Files');
var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  sharedConfig(config, {testName: 'ecpweb3: jQuery', logFile: 'karma-jquery.log'});

  config.set({
    files: ecpweb3Files.mergeFilesFor('karmaJquery').concat({
      pattern: "test/fixtures/**/*.html",
      served: true,
      watched: true,
      included: false
    }),
    exclude: ecpwebFiles.mergeFilesFor('karmaJqueryExclude'),

    junitReporter: {
      outputFile: 'test_out/jquery.xml',
      suite: 'jQuery'
    }
  });
};
