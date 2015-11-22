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
/*
Dwoma pierwszymi testami powinny byc: createNewTemplates oraz newChapterModal.
Poki w filteringTest dane zapiete sa na sztywno, przed uruchomieniem testu trzeba zapiac odpowiednie wartosci.
CreateNewTemplates, po odblokowaniu w lini 81, tworzy nowy template z jezykiem 'en', co trzeba brac pod uwage podawania danych w filtering.
*/


    //createNewTemplates -> Dziala w pelni, ale nie dziala delete template wiec robi spam na liscie template.
    // Wewnatrz testu, w linii 81, wylaczylem opcje dodania temp i expecta nowego temp
  var createNewTemplates = require('./Tests/createNewTemplates.js'); // Start -> Create new template, select category, revision, description User Story #2573
  var newChapterModal = require('./Tests/newChapterModal.js'); // Start -> 'Add new chapter and subchapter, User Story #2585
    //filteringTest - dane zapięte na sztywno, w srodku jest niedokonczona funkcja o ktora mialem Ciebie pytac
  var filteringTest = require('./Tests/filteringTest.js'); // Start -> filteringtest, User Story #2576
  var searchTest = require('./Tests/searchTest.js'); // Start -> searching test, User Story #2577
    //sortingColumnTest -> Sorting nie działa prawidłowo na firefox
    //var sortingColumnTest = require('./Tests/sortingColumnTest.js'); // Start -> sorting column test, User Story #2579

  var doubleClickTriggerEditTest = require('./Tests/doubleClickTriggerEditTest.js'); // Start -> double click on any element in the designer triggers edit action, User Story #2581
  var preventFromLosingUnsave = require('./Tests/preventFromLosingUnsave.js'); // Start -> Prevent from losing unsaved changes, User Story #2582
  var autoSaveTempAfterChange = require('./Tests/autoSaveTempAfterChange.js'); // Start -> Automatically save template state after some changes, User Story #2583

    //changeTemplateState -> funkcja niedokonczona przez niedzialajacy template delete, nie chce robic spamu testujac.
  //var changeTemplateState = require('./Tests/changeTemplateState.js'); // Start -> Get available transitions from service, allow to perform one transitions. User Story #2584

  var dragNDropToTemplate = require('./Tests/dragNDropToTemplate.js'); // Start -> 'Drag&drop of elements, User Story #2586

});
