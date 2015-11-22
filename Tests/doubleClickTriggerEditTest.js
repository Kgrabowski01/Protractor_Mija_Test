/*
Description

double click on any element in the designer triggers edit action
*/

// Start -> double click on any element in the designer triggers edit action, User Story #2581
describe('Double click for edit in designer,', function() {
  beforeEach(function() {
    browser.get('http://localhost:9000/#/cs/designer');
  });

  var firstTemplate = element.all(by.repeater('item in ctrl.filteredTemplates track by $index')).get(0);
  var openInDesigner = element(by.css('[ng-click="ctrl.openTemplates()"]'));
  var firstEditableOption = element(by.css('.header-name-wrapper.flex'));
  var errors = element.all(by.cssContainingText('p.alert-content','Template is not editable, because it is not in \'Development\' status.'));
  var newChapter = element.all(by.css('[ng-click="ctrl.addChapter()"]'));


  // start -> Functions from filteringtest
  var filterByState = element(by.model('ctrl.filters.state'));
  var filterClick = element(by.css('[ng-click="ctrl.showFilterDialog();"]'));
  var applyFilter = element(by.css('[ng-click="ctrl.applyFilters()"]'));

  function filterOptions (filterBy, index) {
    var elems = element.all(by.repeater(filterBy)).get(index);
    return elems;
  }
  // end -> Functions from filteringtest

  function expectDialogSaver () {
    var elem = element.all(by.css('a[ng-click="dialogCtrl.save()"]'));
    expect(elem.count()).toBe(1);
  }

  function expectDesignerStatus (status) {
    var elem = element(by.binding(' ctrl.openTemplate.status '));
    expect(elem.getText()).toEqual(status);
  }

  function closeLastTepm () {
    var closeTemp = element(by.css('[ng-click="designerCtrl.closeTemplate(template)"]'));
    closeTemp.click();
  }

  it ('Filter by state - "DEVELOPMENT", should be able to edit template, status on bar should be "DEVELOPMENT"', function() {
    filterClick.click();
    filterByState.click();
    filterOptions('state in ctrl.states', '2').click();
    element(by.css('.md-click-catcher')).click(); // tutaj jest problem na chromie
    applyFilter.click();

    firstTemplate.click();
    openInDesigner.click();
    browser.actions().doubleClick(firstEditableOption).perform();
    expectDialogSaver();
    expectDesignerStatus('DEVELOPMENT');
    expect(errors.count()).toBe(0);
    closeLastTepm();
  });


  it ('Filter by state - "INACTIVE", should not be able to edit template, status on bar should be "INACTIVE" ', function() {
    filterClick.click();
    filterByState.click();
    filterOptions('state in ctrl.states', '0').click();
    element(by.css('.md-click-catcher')).click(); // tutaj jest problem na chromie
    applyFilter.click();

    firstTemplate.click();
    openInDesigner.click();
    newChapter.click();
    expectDesignerStatus ('INACTIVE');
    expect(errors.count()).toBe(1);
    closeLastTepm();
  });

  it ('Filter by state - "ACTIVE", should not be able to edit template, status on bar should be "ACTIVE"', function() {
    filterClick.click();
    filterByState.click();
    filterOptions('state in ctrl.states', '1').click();
    element(by.css('.md-click-catcher')).click(); // tutaj jest problem na chromie
    applyFilter.click();

    firstTemplate.click();
    openInDesigner.click();
    newChapter.click();
    expectDesignerStatus ('ACTIVE');
    expect(errors.count()).toBe(1);
    closeLastTepm();
  });


});
// End -> double click on any element in the designer triggers edit action, User Story #2581
