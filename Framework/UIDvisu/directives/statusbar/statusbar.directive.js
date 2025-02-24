'use strict';

angular.module('duerrDiagnoseApp')
  .directive('statusbar', function () {
    return {
      templateUrl: 'directives/statusbar/statusbar.html',
      restrict: 'EA',
      controller: 'StatusbarCtrl',
      link: function (scope, element, attrs) {
      }
    };
  });
