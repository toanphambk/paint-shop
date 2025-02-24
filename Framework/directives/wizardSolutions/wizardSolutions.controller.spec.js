'use strict';

describe('Controller: WizardSolutionsCtrl', function () {

  // load the controller's module
  beforeEach(module('duerrDiagnoseApp'));

  var WizardSolutionsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WizardSolutionsCtrl = $controller('WizardSolutionsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
