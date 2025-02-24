'use strict';

angular.module('duerrDiagnoseApp')
  .directive('contentsection', function () {
    return {
      templateUrl: 'directives/contentsection/contentsection.html',
      restrict: 'EA',
      controller: 'ContentsectionCtrl',
      link: function (scope, element, attrs) {
      }
    };
  });
