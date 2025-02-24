'use strict';

describe('Filter: minutesToHHmm', function () {

  // load the filter's module
  beforeEach(module('duerrDiagnoseApp'));

  // initialize a new instance of the filter before each test
  var minutesToHHmm;
  beforeEach(inject(function ($filter) {
    minutesToHHmm = $filter('minutesToHHmm');
  }));

  it('should return the input prefixed with "minutesToHHmm filter:"', function () {
    var text = 'angularjs';
    expect(minutesToHHmm(text)).toBe('minutesToHHmm filter: ' + text);
  });

});
