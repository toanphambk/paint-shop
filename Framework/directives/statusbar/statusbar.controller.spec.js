'use strict';

describe('Controller: StatusbarCtrl', function () {

  // load the controller's module
  beforeEach(module('duerrDiagnoseApp'));

  var StatusbarCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StatusbarCtrl = $controller('StatusbarCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
