'use strict';

angular.module('duerrDiagnoseApp')
  .directive('gridelement', function () {
    return {
      templateUrl: 'directives/gridelement/gridelement.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
