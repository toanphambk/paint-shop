'use strict';

angular.module('duerrDiagnoseApp')

  .controller('ContentsectionPlantCtrl', function ($scope, $timeout, dataFactory, $stateParams) {
    var self = this;
    var functionGroupsTimeout;
    var getPlantByIdTimeout;
    $scope.selectedTile;
    $scope.wizardData;
    $scope.items = [];
    $scope.filter = {
      error: true,
      warning: true,
      info: true
    };
    $scope.overviewStatus = messageStatus($scope.messages);
    $scope.number = 5;

    $scope.getNumber = function(num) {
        return new Array(num);
    };

    $scope.selectTile = function (_tile) {
      $scope.selectedTile = _tile;
      self.getWizardData(_tile.id);
    };

    this.getErrors = function () {
      return dataFactory.getErrorsByPlant($stateParams.id).then(function (errors) {
        if (errors) {
          errors.sort(function (a, b) {
            return a.productionRelevance-b.productionRelevance;
          });
          $scope.items = errors;
        }

        functionGroupsTimeout = $timeout(self.getErrors, 1000);
      });
    };

    this.getWizardData = function (_errorId) {
      dataFactory.getMainCausesFromErrors(_errorId).then(function (_wizardData) {
        if (_wizardData) {
          $scope.wizardData = _wizardData;
        }
      });
    };

    this.getPlantById = function () {
      dataFactory.getPlantById($stateParams.id).then(function (plant) {
        if (plant) {
          $scope.plant = plant;
          $scope.plant.status = messageStatus($scope.plant);
        }
      });

      getPlantByIdTimeout = $timeout(self.getPlantById, 1000);
    };

    $scope.$on("$destroy", function () {
      $timeout.cancel(functionGroupsTimeout);
      $timeout.cancel(getPlantByIdTimeout);
    });

    function messageStatus(data) {
      var status = 0;
      if( data.errorCount > 0) status = 'error';
      if ( data.errorCount == 0 && data.warningCount > 0) status = 'warning';
      if ( data.errorCount == 0 && data.warningCount > 0 && data.infoCount > 0) status = 'info';
      return status;
    }

    $scope.resetFilter = function () {
      $scope.filter.error = true;
      $scope.filter.warning = true;
      $scope.filter.info = true;
    };

    this.init = function () {
      self.getErrors()
      .then(function () {
        if ($scope.items.length > 0 && $scope.items[0]) {
          $scope.selectTile($scope.items[0]);
        }
      });
      self.getPlantById();
    };

    self.init();
  });
