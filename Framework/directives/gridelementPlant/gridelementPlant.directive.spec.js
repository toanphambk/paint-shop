'use strict';

describe('Directive: gridelementPlant', function () {

  // load the directive's module and view
  beforeEach(module('duerrDiagnoseApp'));
  beforeEach(module('directives/gridelementPlant/gridelementPlant.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<gridelement-plant></gridelement-plant>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the gridelementPlant directive');
  }));
});
