'use strict';

describe('Directive: gridelement', function () {

  // load the directive's module and view
  beforeEach(module('sourceApp'));
  beforeEach(module('directives/gridelement/gridelement.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<gridelement></gridelement>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the gridelement directive');
  }));
});