'use strict';

angular.module('duerrDiagnoseApp')
  .directive('gridelementPlant', function () {
    return {
      templateUrl: 'directives/gridelementPlant/gridelementPlant.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
