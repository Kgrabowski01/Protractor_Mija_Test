/*
Description

- drag&drop of templates to category (on list of templates)
- drag&drop of elements from right side to template content

*/

// Start -> 'Drag&drop of elements, User Story #2586
describe('Drag&drop of elements,', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/cs/designer');
    filterClick.click();
    filterByState.click();
    filterOptions('state in ctrl.states', '2').click();
    element(by.css('.md-click-catcher')).click(); // tutaj jest problem na chromie
    applyFilter.click();
    firstTemplate.click();
    openInDesigner.click();

    dropDown = element.all(by.cssContainingText('md-select-value span', 'Drop-down title'));
    dropDownBefore = dropDown.count();
    dropDown.count().then(function(originalCount) {
      dropDownBefore = originalCount;
    });

  });

  var dropDown;
  var dropDownBefore;
  var firstTemplate = element.all(by.repeater('item in ctrl.filteredTemplates track by $index')).get(0);
  var openInDesigner = element(by.css('[ng-click="ctrl.openTemplates()"]'));

  // start -> Functions from filteringtest
  var filterByState = element(by.model('ctrl.filters.state'));
  var filterClick = element(by.css('[ng-click="ctrl.showFilterDialog();"]'));
  var applyFilter = element(by.css('[ng-click="ctrl.applyFilters()"]'));

  function filterOptions (filterBy, index) {
    var elems = element.all(by.repeater(filterBy)).get(index);
    return elems;
  }
  // end -> Functions from filteringtest element in ctrl.openTemplate.chapters.elements track by $index

  function closeLastTepm () {
    var closeTemp = element(by.css('[ng-click="designerCtrl.closeTemplate(template)"]'));
    closeTemp.click();
  }

  it (' Drag&drop from right side ("Drop-down") to template content, check number of "Drop-down" before and after.', function() {
    var dropOnFirstTemp = element.all(by.cssContainingText('span.chapter-index.ng-binding','I')).get(0);
    var elemsToDrop = element.all(by.repeater('element in ctrl.elements track by $index')).get(3);
    browser.actions().mouseDown(elemsToDrop).perform();
    browser.actions().mouseMove(dropOnFirstTemp).perform();
    browser.actions().mouseUp(dropOnFirstTemp).perform();
    expect(dropDown.count()).toEqual(dropDownBefore+1);
    closeLastTepm();
  });

  // that dont work yet

  // it (' - drag&drop of templates to category (on list of templates)', function() {
  //
  // });

});
// Start -> 'Drag&drop of elements, User Story #2586
