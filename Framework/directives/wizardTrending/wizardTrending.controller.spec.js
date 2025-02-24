'use strict';

describe('Controller: WizardTrendingCtrl', function () {

  // load the controller's module
  beforeEach(module('duerrDiagnoseApp'));

  var WizardTrendingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WizardTrendingCtrl = $controller('WizardTrendingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
