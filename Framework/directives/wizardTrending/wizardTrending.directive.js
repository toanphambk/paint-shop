'use strict';

angular.module('duerrDiagnoseApp')
  .directive('wizardTrending', function () {
    return {
      templateUrl: 'directives/wizardTrending/wizardTrending.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });