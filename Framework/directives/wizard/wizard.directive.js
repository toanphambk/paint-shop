'use strict';

angular.module('duerrDiagnoseApp')
  .directive('wizard', function () {
    return {
      templateUrl: 'directives/wizard/wizard.html',
      restrict: 'EA',
      controller: 'WizardCtrl',
      link: function (scope, element, attrs) {
      }
    };
  });
