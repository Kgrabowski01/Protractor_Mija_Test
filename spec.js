describe('Testing Mija system,', function() {
  // Start -> Enter login
  it('Log into Mija system', function() {
    browser.get('http://localhost:9000/#/cs/auth');
    element(by.model('authCtrl.credentials.accountName')).sendKeys('mija');
    element(by.model('authCtrl.credentials.userName')).sendKeys('mija');
    element(by.model('authCtrl.credentials.password')).sendKeys('mija\n');
    expect(browser.getCurrentUrl()).toMatch(/\/designer/);
  });
  // End -> Enter login
  var searchTest = require('./Tests/searchTest.js'); // Start -> searching test, User Story #2577
  var filteringTest = require('./Tests/filteringTest.js'); // Start -> filteringtest, User Story #2576
  var sortingColumnTest = require('./Tests/sortingColumnTest.js'); // Start -> sorting column test, User Story #2579
  var doubleClickTriggerEditTest = require('./Tests/doubleClickTriggerEditTest.js'); // Start -> double click on any element in the designer triggers edit action, User Story #2581
  // filteringTest - dane zapięte na sztywno, w srodku jest niedokonczona funkcja o ktora mialem Ciebie pytac

});
