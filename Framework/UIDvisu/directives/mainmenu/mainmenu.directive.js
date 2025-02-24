'use strict';

angular.module('duerrDiagnoseApp')
  .directive('mainmenu', function () {
    return {
      templateUrl: 'directives/mainmenu/mainmenu.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
