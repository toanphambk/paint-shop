'use strict';

describe('Filter: messageFilter', function () {

  // load the filter's module
  beforeEach(module('duerrDiagnoseApp'));

  // initialize a new instance of the filter before each test
  var messageFilter;
  beforeEach(inject(function ($filter) {
    messageFilter = $filter('messageFilter');
  }));

  it('should return the input prefixed with "messageFilter filter:"', function () {
    var text = 'angularjs';
    expect(messageFilter(text)).toBe('messageFilter filter: ' + text);
  });

});
