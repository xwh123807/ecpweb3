var ecpweb3Files = require('./ecpweb3Files');
var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  sharedConfig(config, {testName: 'ecpweb3: modules', logFile: 'karma-modules.log'});

  config.set({
    files: ecpweb3Files.mergeFilesFor('karmaModules', 'angularSrcModules'),

    junitReporter: {
      outputFile: 'test_out/modules.xml',
      suite: 'modules'
    }
  });
};
