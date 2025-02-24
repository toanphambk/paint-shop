'use strict';

describe('Directive: contentsectionPlant', function () {

  // load the directive's module and view
  beforeEach(module('duerrDiagnoseApp'));
  beforeEach(module('directives/contentsectionPlant/contentsectionPlant.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<contentsection-plant></contentsection-plant>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the contentsectionPlant directive');
  }));
});
