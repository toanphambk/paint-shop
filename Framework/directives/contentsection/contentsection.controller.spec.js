'use strict';

describe('Controller: ContentsectionCtrl', function () {

  // load the controller's module
  beforeEach(module('duerrDiagnoseApp'));

  var ContentsectionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContentsectionCtrl = $controller('ContentsectionCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
