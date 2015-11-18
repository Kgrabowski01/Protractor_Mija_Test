/*
Description
filters modal
filter by languages
filter by state
filter by creator
selected filters indicator above the table
*/

// Start -> filteringtest, User Story #2576
describe('Filter testing,', function() {
  beforeEach(function() {
    browser.get('http://localhost:9000/#/cs/designer');
  });

  var filterClick = element(by.css('[ng-click="ctrl.showFilterDialog();"]'));
  var filterByLang = element(by.model('ctrl.filters.language'));
  var filterByState = element(by.model('ctrl.filters.state'));
  var filterByCreator = element(by.model('ctrl.filters.creator'));
  var applyFilter = element(by.css('[ng-click="ctrl.applyFilters()"]'));

  function filterOptions (filterBy, index) {
    var elems = element.all(by.repeater(filterBy)).get(index);
    return elems;
  }

  function expectCountElemsInTable (source, howMany) {
    var elems = element.all(by.repeater(source));
    expect(elems.count()).toBe(howMany);
  }

  function expectCountByFilterProp (filter, howMany) {
    var elems = element.all(by.cssContainingText('tbody tr td',filter)).then(function(rows) {
      expect(rows.length).toBe(howMany);
    });
  }

  function expectfilterIndicator (indicator) {
    var elems = element.all(by.cssContainingText('.chosen-filter-name', indicator));
    expect(elems.count()).toBe(1);
  }

  // var filterValues = {before: 0};
  // function countBefore (what) {  //   <--------->           funkcja ktora chce wykorzystac do zliczania elementow w danej kolumnie, przed uruchomieniem filtra.
  //   var mappedVals = element.all(by.repeater('item in ctrl.filteredTemplates').column('item.defaultLanguage')).map(function (elm) {
  //     return elm.getText();
  //   });
  //   mappedVals.then(function (textArr) {
  //     var arrLength = textArr.length;
  //     var counted = 0;
  //     var i = 0;
  //     for ( i ; i < arrLength; i++) {
  //       if (arrLength[0] = what) {counted++;}
  //     }
  //     return tempx = counted; //   <--------->           Ale nie potrafie zwrocic tej wartosci promise do linii 65
  //   });
  // }

  it('Should filter by languages, default -0- "english", should have equal hits before and after', function() {
    filterClick.click();
    filterByLang.click();
    filterOptions('language in ctrl.languages', '0').click();
    element(by.css('.md-click-catcher')).click(); // tutaj jest error na chromie
    applyFilter.click();
    //var before = countBefore ('en');
    //expect(before).toEqual(5);

    expectCountElemsInTable('item in ctrl.filteredTemplates', 5);
    expectCountByFilterProp('en', 5);
    expectfilterIndicator('language');
  });

  it ('Should filter by state, default -1- "active", should have equal hits before and after', function() {
    filterClick.click();
    filterByState.click();
    filterOptions('state in ctrl.states', '1').click();
    element(by.css('.md-click-catcher')).click(); // tutaj jest problem na chromie
    applyFilter.click();

    expectCountElemsInTable('item in ctrl.filteredTemplates', 3);
    expectCountByFilterProp('ACTIVE', 3);
    expectfilterIndicator('state');
  });

  it ('Should filter by creator, default -0- "mija", should have equal hits before and after', function(){
    filterClick.click();
    filterByCreator.click();
    filterOptions('creator in ctrl.creators', '0').click();
    element(by.css('.md-click-catcher')).click(); // tutaj jest problem na chromie
    applyFilter.click();

    expectCountElemsInTable('item in ctrl.filteredTemplates', 12);
    expectCountByFilterProp('mija', 12);
    expectfilterIndicator('creator');
  });

});
// End -> filteringtest, User Story #2576
