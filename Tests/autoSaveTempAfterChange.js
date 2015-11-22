/*
Application should automatically save template state after some changes in it e.g. add/edit/delete elements/chapters, change template name.

Template should be automatically saved after specified number of seconds after last change.
*/

// Start -> Prevent from losing unsaved changes, User Story #2582
describe('Save template state after some changes,', function() {
  beforeEach(function() {
    browser.get('http://localhost:9000/#/cs/designer');
  });

  var firstTemplate = element.all(by.repeater('item in ctrl.filteredTemplates track by $index')).get(0);
  var openInDesigner = element(by.css('[ng-click="ctrl.openTemplates()"]'));
  var firstEditableOption = element(by.css('.header-name-wrapper.flex'));
  var newValueTemp = 'New, saved name. User Story #2582';
  var chapterNameInput = element(by.model('ctrl.newElement._name'));
  var editChapterNameCancel = element.all(by.css('a[ng-click="dialogCtrl.cancel()"]'));
  var editChapterNameSave = element.all(by.css('a[ng-click="dialogCtrl.save()"]'));
  var titleNameOptions = element(by.css('md-icon[md-svg-icon="assets/icons/icon_more_vert.svg"]'));
  var titleNameEdit = element(by.cssContainingText('span','Edit details'));
  var titleNameInput = element(by.model('ctrl.newTemplate.name'));
  var titleSave= element(by.css('[ng-click="ctrl.save()"]'));
  var isNewTitle = element.all(by.cssContainingText('md-tab-item span', 'New, saved name. User Story #2582'));

  // start -> Functions from filteringtest
  var filterByState = element(by.model('ctrl.filters.state'));
  var filterClick = element(by.css('[ng-click="ctrl.showFilterDialog();"]'));
  var applyFilter = element(by.css('[ng-click="ctrl.applyFilters()"]'));

  function filterOptions (filterBy, index) {
    var elems = element.all(by.repeater(filterBy)).get(index);
    return elems;
  }
  // end -> Functions from filteringtest

  function changeTemplateValue (destination, value) {
    destination.clear().sendKeys(value);
  }

  function epxectChapterNames (value) {
    var names = element.all(by.binding('element._name')).map(function (elm) {
      return elm.getText();
    });
    names.then(function (textArr) {
      expect(textArr[0]).toEqual(value);
    });
  }

  function closeLastTepm () {
    var closeTemp = element(by.css('[ng-click="designerCtrl.closeTemplate(template)"]'));
    closeTemp.click();
  }

  it (' Changes in it - edit title name and chaptername.', function() {
    filterClick.click();
    filterByState.click();
    filterOptions('state in ctrl.states', '2').click();
    element(by.css('.md-click-catcher')).click(); // tutaj jest problem na chromie
    applyFilter.click();
    firstTemplate.click();
    openInDesigner.click();

    titleNameOptions.click();
    titleNameEdit.click();
    changeTemplateValue (titleNameInput, newValueTemp);
    titleSave.click();
    expect(isNewTitle.count()).toEqual(1);

    browser.actions().doubleClick(firstEditableOption).perform();
    changeTemplateValue (chapterNameInput, newValueTemp);
    editChapterNameSave.click();
    epxectChapterNames(newValueTemp);
    closeLastTepm();
  });

});
// End -> Prevent from losing unsaved changes, User Story #2582
