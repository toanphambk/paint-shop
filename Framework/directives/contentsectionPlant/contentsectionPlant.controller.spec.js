'use strict';

describe('Controller: ContentsectionPlantCtrl', function () {

  // load the controller's module
  beforeEach(module('duerrDiagnoseApp'));

  var ContentsectionPlantCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContentsectionPlantCtrl = $controller('ContentsectionPlantCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
