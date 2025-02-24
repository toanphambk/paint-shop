'use strict';

describe('Directive: wizardRelated', function () {

  // load the directive's module and view
  beforeEach(module('duerrDiagnoseApp'));
  beforeEach(module('directives/wizardRelated/wizardRelated.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<wizard-related></wizard-related>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the wizardRelated directive');
  }));
});