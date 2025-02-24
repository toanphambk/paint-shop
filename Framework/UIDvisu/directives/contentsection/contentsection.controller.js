'use strict';

angular.module('duerrDiagnoseApp')
  .controller('ContentsectionCtrl', function ($scope, $timeout, dataFactory) {
    var self = this;
    var plantsTimeout;
    $scope.plants;

    this.getPlants = function () {
      dataFactory.getPlants().then(function (_plants) {
        if (_plants) {
          $scope.plants = _plants;
        }
      });

      plantsTimeout = $timeout(self.getPlants, 1000);
    };

    $scope.$on("$destroy", function() {
      $timeout.cancel(plantsTimeout);
    });

    this.init = function () {
      self.getPlants();
    }

    self.init();
  });
