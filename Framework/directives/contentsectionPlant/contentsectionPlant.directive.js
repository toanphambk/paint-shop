'use strict';

angular.module('duerrDiagnoseApp')
  .directive('contentsectionPlant', function () {
    return {
      templateUrl: 'directives/contentsectionPlant/contentsectionPlant.html',
      restrict: 'EA',
      controller: 'ContentsectionPlantCtrl',
      link: function (scope, element, attrs) {
      }
    };
  });
