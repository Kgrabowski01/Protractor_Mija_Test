/*
New chapter modal
- name
- id
- no visibility conditions for now
- subchapter
*/

// Start -> 'Add new chapter and subchapter, User Story #2585
describe('Add new chapter and subchapter,', function() {
  var mainChapters;
  var mainChaptersBefore;
  var firstTemplate = element.all(by.repeater('item in ctrl.filteredTemplates track by $index')).get(0);
  var openInDesigner = element(by.css('[ng-click="ctrl.openTemplates()"]'));
  var newChapter = element.all(by.css('[ng-click="ctrl.addChapter()"]'));
  //var newSubChapter = element.all(by.css('md-icon[md-svg-icon="assets/icons/icon_add.svg"]'));
  var newValueTemp = 'New New New';
  var chapterNameInput = element(by.model('ctrl.newElement._name'));
  var editChapterNameCancel = element.all(by.css('a[ng-click="dialogCtrl.cancel()"]'));
  var editChapterNameSave = element.all(by.css('a[ng-click="dialogCtrl.save()"]'));

  beforeEach(function() {
    browser.get('http://localhost:9000/#/cs/designer');
    filterClick.click();
    filterByState.click();
    filterOptions('state in ctrl.states', '2').click();
    element(by.css('.md-click-catcher')).click(); // tutaj jest problem na chromie
    applyFilter.click();
    firstTemplate.click();
    openInDesigner.click();

    mainChapters = element.all(by.repeater('element in ctrl.openTemplate.chapters.elements track by $index'));
    mainChaptersBefore = mainChapters.count();
    mainChapters.count().then(function(originalCount) {
      mainChaptersBefore = originalCount;
    });

  });

  // start -> Functions from filteringtest
  var filterByState = element(by.model('ctrl.filters.state'));
  var filterClick = element(by.css('[ng-click="ctrl.showFilterDialog();"]'));
  var applyFilter = element(by.css('[ng-click="ctrl.applyFilters()"]'));

  function filterOptions (filterBy, index) {
    var elems = element.all(by.repeater(filterBy)).get(index);
    return elems;
  }
  // end -> Functions from filteringtest element in ctrl.openTemplate.chapters.elements track by $index

  function changeTemplateValue (destination, value) {
    destination.clear().sendKeys(value);
  }

  function epxectChapterNames (value, index) {
    var names = element.all(by.binding('element._name')).map(function (elm) {
      return elm.getText();
    });
    names.then(function (textArr) {
      expect(textArr[mainChaptersBefore]).toEqual(value);
    });
  }

  function closeLastTepm () {
    var closeTemp = element(by.css('[ng-click="designerCtrl.closeTemplate(template)"]'));
    closeTemp.click();
  }

  it (' Add, new chapter, copmare between before and after add chapter.', function() {
    var lastChapter = element.all(by.repeater('element in ctrl.openTemplate.chapters.elements track by $index')).get(mainChaptersBefore);
    //browser.actions().mouseMove(firstEditableOption).perform();
    //newSubChapter.click();  <------------- Tutaj nie dziala dodawanie subelementu, przez to ze jest niewidoczny. Nie moge go zlokalizowac.
    newChapter.click();
    expect(mainChapters.count()).toEqual(mainChaptersBefore+1);

    browser.actions().doubleClick(lastChapter).perform();
    changeTemplateValue (chapterNameInput, newValueTemp);
    editChapterNameSave.click();
    epxectChapterNames(newValueTemp, lastChapter);
    closeLastTepm();
  });

});
// End -> 'Add new chapter and subchapter, User Story #2585
