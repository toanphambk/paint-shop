'use strict';

describe('Directive: mainmenu', function () {

  // load the directive's module and view
  beforeEach(module('duerrDiagnoseApp'));
  beforeEach(module('directives/mainmenu/mainmenu.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mainmenu></mainmenu>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the mainmenu directive');
  }));
});
