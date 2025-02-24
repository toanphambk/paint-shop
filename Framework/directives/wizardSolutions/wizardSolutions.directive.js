'use strict';

angular.module('duerrDiagnoseApp')
  .directive('wizardSolutions', function () {
    return {
      templateUrl: 'directives/wizardSolutions/wizardSolutions.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });