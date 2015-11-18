exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: { 'browserName': 'firefox' },
  specs: ['spec.js'],
  onPrepare: function() {
    browser.manage().window().setSize(1600, 900);
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
