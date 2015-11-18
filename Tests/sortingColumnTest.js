/*
Description

allow to sort by any column
sorting only by one column
*/
// Nie działa poprawnie, pozwala sortowac po dowolnej kolumnie, ale sortowanie po Revision daje zle wyniki - mialem o to pytac.
// Start -> sorting column test, User Story #2579
describe('Sort ascending and descending testing,', function() {
  beforeEach(function() {
    browser.get('http://localhost:9000/#/cs/designer');
  });

  var columnsIndicators = [
    '[ng-click="ctrl.sort = \'name\'; ctrl.sortDirection = (ctrl.sortDirection === \'DESC\' ? \'ASC\' : \'DESC\')"]',
    '[ng-click="ctrl.sort = \'description\'; ctrl.sortDirection = (ctrl.sortDirection === \'DESC\' ? \'ASC\' : \'DESC\')"]',
    '[ng-click="ctrl.sort = \'defaultLanguage\'; ctrl.sortDirection = (ctrl.sortDirection === \'DESC\' ? \'ASC\' : \'DESC\')"]',
    '[ng-click="ctrl.sort = \'defaultLanguage\'; ctrl.sortDirection = (ctrl.sortDirection === \'DESC\' ? \'ASC\' : \'DESC\')"]',
    '[ng-click="ctrl.sort = \'tag\'; ctrl.sortDirection = (ctrl.sortDirection === \'DESC\' ? \'ASC\' : \'DESC\')"]',
    '[ng-click="ctrl.sort = \'status\'; ctrl.sortDirection = (ctrl.sortDirection === \'DESC\' ? \'ASC\' : \'DESC\')"]',
    '[ng-click="ctrl.sort = \'createPersonId\'; ctrl.sortDirection = (ctrl.sortDirection === \'DESC\' ? \'ASC\' : \'DESC\')"]',
    '[ng-click="ctrl.sort = \'lastChanged\'; ctrl.sortDirection = (ctrl.sortDirection === \'DESC\' ? \'ASC\' : \'DESC\')"]'
  ];
  var columnsID = [
    'item.name',
    'item.description',
    'item.defaultLanguage',
    'item.version',
    'item.version', // Version and revision have the same binding
    'item.status',
    'item.createPerson.userName',
    'ctrl.asDate(item.lastChanged)',
  ];

  function sortByColumn (column) {
    element(by.css(column)).click();
  }

  function expectChceckSort (columnsID) {
    var mappedVals = element.all(by.repeater('item in ctrl.filteredTemplates').column(columnsID)).map(function (elm) {
      return elm.getText();
    });
    mappedVals.then(function (textArr) {
      var oldArray = textArr;
      var newArray = textArr.slice(0).sort();
      var newArrayRev = textArr.slice(0).sort().reverse();
      expect(newArray).toEqual(oldArray);
    });
  }

  function expectChceckSortReverse (columnsID) {
    var mappedVals = element.all(by.repeater('item in ctrl.filteredTemplates').column(columnsID)).map(function (elm) {
      return elm.getText();
    });
    mappedVals.then(function (textArr) {
      var oldArray = textArr;
      var newArray = textArr.slice(0).sort();
      var newArrayRev = textArr.slice(0).sort().reverse();
      expect(newArrayRev).toEqual(oldArray);
    });
  }

  it ('Should sort by column,"template name" ', function() {
    /*
    columnsIndicators and columnsID : // Version and revision have the same binding
    0 - template name; 4 - revision
    1 - description; 5 - state
    2 - language; 6 - created By
    3 - version; 7 - last update
    */

    sortByColumn(columnsIndicators[0]);
    expectChceckSort(columnsID[0]);
    sortByColumn(columnsIndicators[0]);
    expectChceckSortReverse(columnsID[0]);
  });

  it ('Should sort by column, "description" ', function() {
    /*
    columnsIndicators and columnsID : // Version and revision have the same binding
    0 - template name; 4 - revision
    1 - description; 5 - state
    2 - language; 6 - created By
    3 - version; 7 - last update
    */

    sortByColumn(columnsIndicators[1]);
    expectChceckSort(columnsID[1]);
    sortByColumn(columnsIndicators[1]);
    expectChceckSortReverse(columnsID[1]);
  });

  it ('Should sort by column, "language" ', function() {
    /*
    columnsIndicators and columnsID : // Version and revision have the same binding
    0 - template name; 4 - revision
    1 - description; 5 - state
    2 - language; 6 - created By
    3 - version; 7 - last update
    */

    sortByColumn(columnsIndicators[2]);
    expectChceckSort(columnsID[2]);
    sortByColumn(columnsIndicators[2]);
    expectChceckSortReverse(columnsID[2]);
  });

  it ('Should sort by column, "version" - Version and revision have the same binding', function() {
    /*
    columnsIndicators and columnsID : // Version and revision have the same binding
    0 - template name; 4 - revision
    1 - description; 5 - state
    2 - language; 6 - created By
    3 - version; 7 - last update
    */

    sortByColumn(columnsIndicators[3]);
    expectChceckSort(columnsID[3]);
    sortByColumn(columnsIndicators[3]);
    expectChceckSortReverse(columnsID[3]);
  });

  it ('Should sort by column, "revision" - Version and revision have the same binding', function() {
    /*
    columnsIndicators and columnsID : // Version and revision have the same binding
    0 - template name; 4 - revision
    1 - description; 5 - state
    2 - language; 6 - created By
    3 - version; 7 - last update
    */

    sortByColumn(columnsIndicators[4]);
    expectChceckSort(columnsID[4]);
    sortByColumn(columnsIndicators[4]);
    expectChceckSortReverse(columnsID[4]);
  });

  it ('Should sort by column, "state" ', function() {
    /*
    columnsIndicators and columnsID : // Version and revision have the same binding
    0 - template name; 4 - revision
    1 - description; 5 - state
    2 - language; 6 - created By
    3 - version; 7 - last update
    */

    sortByColumn(columnsIndicators[5]);
    expectChceckSort(columnsID[5]);
    sortByColumn(columnsIndicators[5]);
    expectChceckSortReverse(columnsID[5]);
  });

  it ('Should sort by column, "created By" ', function() {
    /*
    columnsIndicators and columnsID : // Version and revision have the same binding
    0 - template name; 4 - revision
    1 - description; 5 - state
    2 - language; 6 - created By
    3 - version; 7 - last update
    */

    sortByColumn(columnsIndicators[6]);
    expectChceckSort(columnsID[6]);
    sortByColumn(columnsIndicators[6]);
    expectChceckSortReverse(columnsID[6]);
  });

  it ('Should sort by column, "last update" ', function() {
    /*
    columnsIndicators and columnsID : // Version and revision have the same binding
    0 - template name; 4 - revision
    1 - description; 5 - state
    2 - language; 6 - created By
    3 - version; 7 - last update
    */

    sortByColumn(columnsIndicators[7]);
    expectChceckSort(columnsID[7]);
    sortByColumn(columnsIndicators[7]);
    expectChceckSortReverse(columnsID[7]);
  });


});
// End -> sorting column test, User Story #2579
