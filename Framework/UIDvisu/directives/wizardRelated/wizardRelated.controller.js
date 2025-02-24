'use strict';

angular.module('duerrDiagnoseApp')
  .controller('WizardRelatedCtrl', function ($scope) {
    var self = this;
    $scope.relatedErrors;

    $scope.loadRelatedErrors = function () {
      $scope.selectedTile.relatesTo.forEach(function (_functionGroup) {
        console.log(_functionGroup.name);
      });
    };
  });
