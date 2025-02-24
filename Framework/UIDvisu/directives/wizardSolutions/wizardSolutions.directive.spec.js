'use strict';

describe('Directive: wizardSolutions', function () {

  // load the directive's module and view
  beforeEach(module('duerrDiagnoseApp'));
  beforeEach(module('directives/wizardSolutions/wizardSolutions.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<wizard-solutions></wizard-solutions>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the wizardSolutions directive');
  }));
});