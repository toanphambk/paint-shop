'use strict';

angular.module('duerrDiagnoseApp')
  .controller('WizardCtrl', function($scope, dataFactory, $q) {
    var self = this;
    $scope.showOverview = false;
    var overlay = document.getElementsByClassName('overlay');
    var relatedOverlay = document.getElementsByClassName('related-container');
    var solutionsOverlay = document.getElementsByClassName('solutions-container');
    $scope.relatedErrors = [];
    $scope.areInfoButtonsDisabled = false;

    $scope.toggleHandling = function(_functionGroupId) {
      dataFactory.toggleFunctionGroupHandling(_functionGroupId);
    };

    $scope.closeSolutionOverlay = function() {
      overlay[0].classList.remove('open');
      solutionsOverlay[0].classList.remove('open');
      $scope.openSolution = false;

      var forEach = Array.prototype.forEach;
      var className = "active";

      forEach.call(document.querySelectorAll("." + className), function(node) {
          node.classList.remove(className);
      });
    };

    $scope.openSolutions = function(_mainCause) {

      if (solutionsOverlay[0].classList.contains('open')) {
        $scope.closeSolutionOverlay();
      }

      solutionsOverlay[0].classList.add('open');
      overlay[0].classList.add('open');

      $scope.openSolution = _mainCause;
    };

    $scope.isSelected = function(_mainCause) {
      return $scope.openSolution === _mainCause;
    }

    this.getRelatedErrors = function () {
      var defer = $q.defer();
      $scope.relatedErrors = [];

      $scope.selectedTile.relatesTo.forEach(function (_errorId) {
        dataFactory.getErrorById(_errorId).then(function (_error) {
          if (_error) {
            $scope.relatedErrors.push(_error);

            if ($scope.relatedErrors.length == $scope.selectedTile.relatesTo.length) {
              defer.resolve();
            }
          }
        });
      });

      return defer.promise;
    };

    this.getRelatedMainCauses = function () {
      var defer = $q.defer();
      $scope.relatedMainCauses = [];

      $scope.selectedTile.relatesTo.forEach(function (_error) {
        dataFactory.getMainCausesFromErrors(_error).then(function (_mainCause) {
          if (_mainCause) {
            $scope.relatedMainCauses.push(_mainCause);

            if ($scope.relatedMainCauses.length == $scope.selectedTile.relatesTo.length) {
              defer.resolve(_error);
            }
          }
        });
      });

      return defer.promise;
    };

    $scope.closeRelatedOverlay = function() {
      overlay[0].classList.remove('open');
      relatedOverlay[0].classList.remove('open');
      $scope.areInfoButtonsDisabled = false;
    };

    $scope.openRelatedGroups = function(_id) {

      if (relatedOverlay[0].classList.contains('open')) {
        $scope.closeRelatedOverlay();
      } else {
        self.getRelatedErrors()
          .then(self.getRelatedMainCauses)
          .then(function () {
          $scope.closeSolutionOverlay();
          $scope.areInfoButtonsDisabled = true;
          $scope.functionGroupId = _id;

          overlay[0].classList.add('open');
          relatedOverlay[0].classList.add('open');

          $scope.showOverview = true;
        });
      }
    };

    $scope.closeAllOverlays = function() {
      if (solutionsOverlay[0].classList.contains('open')) {
        $scope.closeSolutionOverlay();
      }
      if (relatedOverlay[0].classList.contains('open')) {
        $scope.closeRelatedOverlay();
      }
    };
  });
