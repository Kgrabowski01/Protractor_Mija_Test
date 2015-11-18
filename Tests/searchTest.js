/*
Description
implement search input field (similar as https://developer.android.com/guide/index.html , without autocomplete)
live search as you type
*/

// Start -> searching test, User Story #2577
describe('Search testing,', function() {
  beforeEach(function() {
    browser.get('http://localhost:9000/#/cs/designer');
  });

  var searchIcon = element(by.css('[ng-click="ctrl.showSearchDialog();"]'));
  var clickSearch = element(by.css('[ng-click="ctrl.applySearchQuery()"]'));

  function countedElems (source) {
    var elems = element.all(by.repeater(source));
    return elems;
  }

  function searchInput (input) {
    element(by.model('ctrl.searchQuery')).sendKeys(input);
  }

  function countBefore (filter) {
    var elems = element.all(by.cssContainingText('table tbody tr td',filter));
    return elems;
  }

  it('Serach for "revision", should have equal hits before and after', function() {
    var beforeSearch = countBefore('revision').count();
    searchIcon.click();
    searchInput('revision');
    clickSearch.click();
    var elems = countedElems('item in ctrl.filteredTemplates');
    expect(elems.count()).toBe(beforeSearch);
  });

  it('Live search test, input "very" without clickSearch, should have equal hits before and after', function() {
    var beforeSearch = countBefore('very').count();
    searchIcon.click();
    searchInput('very');
    var elems = countedElems('item in ctrl.filteredTemplates');
    expect(elems.count()).toBe(beforeSearch);
  });

});
// End -> searching test, User Story #2577
