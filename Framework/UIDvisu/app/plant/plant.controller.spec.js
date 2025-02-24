'use strict';

describe('Controller: PlantCtrl', function () {

  // load the controller's module
  beforeEach(module('duerrDiagnoseApp'));

  var PlantCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlantCtrl = $controller('PlantCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
