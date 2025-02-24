'use strict';

describe('Controller: WizardRelatedCtrl', function () {

  // load the controller's module
  beforeEach(module('duerrDiagnoseApp'));

  var WizardRelatedCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WizardRelatedCtrl = $controller('WizardRelatedCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
