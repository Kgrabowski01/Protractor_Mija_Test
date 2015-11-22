/*
User Story #2573
Description
create template modal
categories selector
call service method
open modal when "create template" button is clicked (in various places in the app)
*/

// Start -> Create new template, select category, revision, description User Story #2573
describe('Create new tempale,', function() {
  beforeEach(function() {
    browser.get('http://localhost:9000/#/cs/designer');
  });


  var openInDesigner = element(by.css('[ng-click="ctrl.openTemplates()"]'));
  var firstEditableOption = element(by.css('.header-name-wrapper.flex'));

  var createNewOnMain = element(by.css('[ng-click="designerCtrl.createTemplateDialog()"]'));
  var inputTempNameMain = element(by.cssContainingText('md-input-container label', 'Template name'));
  var firstCategoryTemplate = element.all(by.model('ctrl.newTemplate.category'));
  var newTempName = 'New Temp, User Story #2573\n';
  var newTempCat = 'New Category, User Story #2573';

  // start -> Functions from filteringtest
  var filterByState = element(by.model('ctrl.filters.state'));
  var filterClick = element(by.css('[ng-click="ctrl.showFilterDialog();"]'));
  var applyFilter = element(by.css('[ng-click="ctrl.applyFilters()"]'));

  function filterOptions (filterBy, index) {
    var elems = element.all(by.repeater(filterBy)).get(index);
    return elems;
  }
  // end -> Functions from filteringtest

  function inputTemplateName (value) {
    var addTestCategoryInput = element(by.model('ctrl.newCategory.name'));
    addTestCategoryInput.click().sendKeys(value);
  }

  function inputRevisionTemplate (value) {
    var revisionTemplate = element(by.cssContainingText('md-input-container label', 'Revision'));
    revisionTemplate.click().sendKeys(value);
  }

  function inputDescriptionTemplate (value) {
    var descriptionTemplate = element(by.cssContainingText('md-input-container label', 'Description'));
    descriptionTemplate.click().sendKeys(value);
  }

  function addCategory () {
    var addTempCategory = element.all(by.css('[ng-click="ctrl.save()"]'));
    addTempCategory.click();
  }

  function expectSavedTemplateOnList () {
    var saveTempBtn = element(by.cssContainingText('div a.md-primary.md-hue-2.link-btn', 'Save'));
    saveTempBtn.click();
    var mappedVals = element.all(by.repeater('item in ctrl.filteredTemplates track by $index').column('item.name'))
    .map(function (elm) {
      return elm.getText();
    });
    mappedVals.then(function (textArr) {
      expect(textArr[0]).toEqual('New Temp, User Story #2573');
    });
  }

  function closeLastTepm () {
    var closeTemp = element(by.css('[ng-click="designerCtrl.closeTemplate(template)"]'));
    closeTemp.click();
  }

  it ('select category, revision, description, chceck first on temp list looking for new template.', function() {
    createNewOnMain.click();
    inputTempNameMain.click().sendKeys(newTempName);
    inputTemplateName(newTempCat);
    addCategory();
    inputRevisionTemplate(1);
    inputDescriptionTemplate('Test Description');
    //expectSavedTemplateOnList ();
  });

});
// End -> Create new template, select category, revision, description User Story #2573
