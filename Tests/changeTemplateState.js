/*
Description

get available transitions from service
allow to perform one of two transitions
*/

/* !!!!!!!!!!!!!!!!!!

Delete templete dont work, when templete state is change its create a new. While i'm testing its create spam on main template list.

!!!!!!!!!!!!!!!!!! */
// Start -> Get available transitions from service, allow to perform one transitions. User Story #2584
describe('Change template state,', function() {
  beforeEach(function() {
    browser.get('http://localhost:9000/#/cs/designer');
  });

  var firstTemplate = element.all(by.repeater('item in ctrl.filteredTemplates track by $index')).get(0);
  var openInDesigner = element(by.css('[ng-click="ctrl.openTemplates()"]'));
  var changeState = element(by.cssContainingText('span','PUBLISH'));
  var isNewState = element.all(by.cssContainingText('div span', 'DEVELOPMENT'));


  // start -> Functions from filteringtest
  var filterByState = element(by.model('ctrl.filters.state'));
  var filterClick = element(by.css('[ng-click="ctrl.showFilterDialog();"]'));
  var applyFilter = element(by.css('[ng-click="ctrl.applyFilters()"]'));

  function filterOptions (filterBy, index) {
    var elems = element.all(by.repeater(filterBy)).get(index);
    return elems;
  }
  // end -> Functions from filteringtest
   function closeLastTepm () {
     var closeTemp = element(by.css('[ng-click="designerCtrl.closeTemplate(template)"]'));
     closeTemp.click();
   }

  it (' Changes template state.', function() {
    filterClick.click();
    filterByState.click();
    filterOptions('state in ctrl.states', '2').click();
    element(by.css('.md-click-catcher')).click(); // tutaj jest problem na chromie
    applyFilter.click();
    firstTemplate.click();
    openInDesigner.click();
    expect(isNewState.count()).toEqual(1); //funkcja nie dokonczona przez niedzialajacy template delete, nie chce robic spamu testujac.
    //changeState.click(); // dziala zmiana stanu
    closeLastTepm();
  });

});
// End -> Prevent from losing unsaved changes, User Story #2582
