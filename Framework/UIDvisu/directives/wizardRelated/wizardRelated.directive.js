'use strict';

angular.module('duerrDiagnoseApp')
  .directive('wizardRelated', function () {
    return {
      templateUrl: 'directives/wizardRelated/wizardRelated.html',
      controller: 'WizardCtrl',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
