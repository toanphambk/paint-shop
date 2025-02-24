'use strict';

describe('Directive: wizardTrending', function () {

  // load the directive's module and view
  beforeEach(module('duerrDiagnoseApp'));
  beforeEach(module('directives/wizardTrending/wizardTrending.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<wizard-trending></wizard-trending>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the wizardTrending directive');
  }));
});