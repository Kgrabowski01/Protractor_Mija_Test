/*
Description

user clicks outside modal and there are unsaved changes - show warning/confirmation popup
user clicks cancel and there are unsaved changes - show warning/confirmation popup
the same as two above but there is no changes - close modal
*/

// Start -> Prevent from losing unsaved changes, User Story #2582
describe('Prevent from losing unsaved changes,', function() {
  beforeEach(function() {
    browser.get('http://localhost:9000/#/cs/designer');
  });

  var firstTemplate = element.all(by.repeater('item in ctrl.filteredTemplates track by $index')).get(0);
  var openInDesigner = element(by.css('[ng-click="ctrl.openTemplates()"]'));
  var firstEditableOption = element(by.css('.header-name-wrapper.flex'));
  var templateInsertChapterName = element(by.model('ctrl.newElement._name'));
  var alertForUnsave = element.all(by.cssContainingText('p.alert-content','Element has been changed. Do you want to continue?'));
  var editChapterNameCancel = element.all(by.css('a[ng-click="dialogCtrl.cancel()"]'));

  // start -> Functions from filteringtest
  var filterByState = element(by.model('ctrl.filters.state'));
  var filterClick = element(by.css('[ng-click="ctrl.showFilterDialog();"]'));
  var applyFilter = element(by.css('[ng-click="ctrl.applyFilters()"]'));

  function filterOptions (filterBy, index) {
    var elems = element.all(by.repeater(filterBy)).get(index);
    return elems;
  }
  // end -> Functions from filteringtest

  function changeTemplateValue (value) {
    templateInsertChapterName.sendKeys(value);
  };

  function expectDialogSaver () {
    var elem = element.all(by.css('a[ng-click="dialogCtrl.save()"]'));
    expect(elem.count()).toBe(1);
  }

  function expectAlertForUnsave (number) {
    expect(alertForUnsave.count()).toBe(number);
  }

  function expectDesignerStatus (status) {
    var elem = element(by.binding(' ctrl.openTemplate.status '));
    expect(elem.getText()).toEqual(status);
  }

  function closeLastTepm () {
    var closeTemp = element(by.css('[ng-click="designerCtrl.closeTemplate(template)"]'));
    closeTemp.click();
  }


  it ('Filter by state - "DEVELOPMENT", with changes , clicks outside modal - show warning popup', function() {
    filterClick.click();
    filterByState.click();
    filterOptions('state in ctrl.states', '2').click();
    element(by.css('.md-click-catcher')).click(); // tutaj jest problem na chromie
    applyFilter.click();
    firstTemplate.click();
    openInDesigner.click();

    browser.actions().doubleClick(firstEditableOption).perform();
    expectDialogSaver();
    changeTemplateValue(' some new text');
    element(by.css('.ngdialog-overlay')).click();
    expectAlertForUnsave (1);
    expectDesignerStatus('DEVELOPMENT');
    closeLastTepm();
  });

  it ('Filter by state - "DEVELOPMENT", with changes , clicks cancel - show warning popup', function() {
    filterClick.click();
    filterByState.click();
    filterOptions('state in ctrl.states', '2').click();
    element(by.css('.md-click-catcher')).click(); // tutaj jest problem na chromie
    applyFilter.click();

    firstTemplate.click();
    openInDesigner.click();
    browser.actions().doubleClick(firstEditableOption).perform();
    expectDialogSaver();
    changeTemplateValue(' some new text');
    editChapterNameCancel.click();
    expectAlertForUnsave (1);
    expectDesignerStatus('DEVELOPMENT');
    closeLastTepm();
  });

  it ('Filter by state - "DEVELOPMENT", no changes , clicks outside modal - dont show warning popup', function() {
    filterClick.click();
    filterByState.click();
    filterOptions('state in ctrl.states', '2').click();
    element(by.css('.md-click-catcher')).click(); // tutaj jest problem na chromie
    applyFilter.click();

    firstTemplate.click();
    openInDesigner.click();
    browser.actions().doubleClick(firstEditableOption).perform();
    expectDialogSaver();
    element(by.css('.ngdialog-overlay')).click();
    expectAlertForUnsave (0);
    expectDesignerStatus('DEVELOPMENT');
    closeLastTepm();
  });

  it ('Filter by state - "DEVELOPMENT", no changes , clicks cancel - dont show warning popup', function() {
    filterClick.click();
    filterByState.click();
    filterOptions('state in ctrl.states', '2').click();
    element(by.css('.md-click-catcher')).click(); // tutaj jest problem na chromie
    applyFilter.click();

    firstTemplate.click();
    openInDesigner.click();
    browser.actions().doubleClick(firstEditableOption).perform();
    expectDialogSaver();
    editChapterNameCancel.click();
    expectAlertForUnsave (0);
    expectDesignerStatus('DEVELOPMENT');
    closeLastTepm();
  });

});
// End -> Prevent from losing unsaved changes, User Story #2582
