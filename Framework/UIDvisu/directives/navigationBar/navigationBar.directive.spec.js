'use strict';

describe('Directive: navigationBar', function () {

  // load the directive's module and view
  beforeEach(module('duerrDiagnoseApp'));
  beforeEach(module('directives/navigationBar/navigationBar.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<navigation-bar></navigation-bar>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the navigationBar directive');
  }));
});