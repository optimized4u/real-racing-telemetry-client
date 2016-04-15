exports.config = {
  allScriptsTimeout: 11000,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },

  chromeOnly: false,

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
