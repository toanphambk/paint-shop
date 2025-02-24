'use strict';

angular.module('duerrDiagnoseApp')
  .directive('navigationBar', function () {
    return {
      templateUrl: 'directives/navigationBar/navigationBar.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });