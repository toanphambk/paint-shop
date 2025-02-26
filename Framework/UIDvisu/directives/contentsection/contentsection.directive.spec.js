'use strict';

describe('Directive: contentsection', function () {

  // load the directive's module and view
  beforeEach(module('duerrDiagnoseApp'));
  beforeEach(module('directives/contentsection/contentsection.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<contentsection></contentsection>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the contentsection directive');
  }));
});
