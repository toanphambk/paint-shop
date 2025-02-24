'use strict';

angular.module('duerrDiagnoseApp')

  .controller('ContentsectionPlantCtrl', function ($scope, $timeout, dataFactory, $stateParams, REQUESTTIME) {
    var self = this;
    var functionGroupsTimeout;
    var getPlantByIdTimeout;
    var clickedNum;
    $scope.selectedTile;
    /*$scope.solutionTitle;*/
    $scope.wizardData;
    $scope.items = [];
    $scope.filter = {
      error: true,
      warning: true,
      info: true,
      processFault: true,
      electricalFault: true,
      mechanicalFault: true,
      softwareFault: true
    };
    $scope.overviewStatus = messageStatus($scope.messages);
    $scope.number = 5;

    $scope.getNumber = function(num) {
        return new Array(num);
    };

    $scope.selectTile = function (_tile, clickindex) {
      clickedNum = clickindex;
      $scope.selectedTile = _tile;
      
      /*if(_tile.plant)
        $scope.solutionTitle = _tile.plant;
      if (_tile.functionGroup)
        $scope.solutionTitle += "." + _tile.functionGroup;
      if (_tile.functionElement)
        $scope.solutionTitle += "." + _tile.functionElement;*/
    
      self.getWizardData(_tile.id);
      /*try {
          $scope.closeSolutionOverlay();
      } catch (e) {
          console.log(e);
      };*/
      
    };

    this.getErrors = function () {
        
      return dataFactory.getErrorsByPlant($stateParams.id)
        .then(function (errors) {
            if (errors) {
                errors.sort(function (a, b) {
                    return a.productionRelevance-b.productionRelevance;
                });
                $scope.items = errors;
                $scope.selectedTile = $scope.items[clickedNum];
          
//              window.parent.document.getElementsByClassName('ball')[0].style.display = 'none';
//              window.parent.document.getElementsByClassName('ball1')[0].style.display = 'none';
                window.parent.document.getElementsByClassName('servererror')[0].style.display = 'none';
            } else {
//              window.parent.document.getElementsByClassName('ball')[0].style.display = 'none';
//              window.parent.document.getElementsByClassName('ball1')[0].style.display = 'none';
                window.parent.document.getElementsByClassName('servererror')[0].style.display = 'block';
            }
            
            parent.document.documentElement.classList.remove('offline');
            parent.document.getElementsByTagName('body')[0].classList.remove('offline');
            $scope.ServerError = false;
            
            functionGroupsTimeout = $timeout(self.getErrors, REQUESTTIME);
        
//        $timeout(function() {
////               $scope.$apply();
//               $scope.$broadcast();
//            }, 100); 
        })
        .catch(function (_error){
            //parent.document.documentElement.classList.add('offline');
            //parent.document.getElementsByTagName('body')[0].classList.add('offline');
            //$scope.ServerError = true;
            
            //functionGroupsTimeout = $timeout(self.getErrors, REQUESTTIME);
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
      dataFactory.getPlantById($stateParams.id)
        .then(function (plant) {
            if (plant) {
                $scope.plant = plant;
                $scope.plant.status = messageStatus($scope.plant);
            }
            parent.document.documentElement.classList.remove('offline');
            parent.document.getElementsByTagName('body')[0].classList.remove('offline');
            $scope.ServerError = false;
        })
        .catch(function (_error){
            //parent.document.documentElement.classList.add('offline');
            //parent.document.getElementsByTagName('body')[0].classList.add('offline');
            //$scope.ServerError = true;
        });
      
      getPlantByIdTimeout = $timeout(self.getPlantById, REQUESTTIME);
    };

    $scope.$on("$destroy", function () {
      $timeout.cancel(functionGroupsTimeout);
      $timeout.cancel(getPlantByIdTimeout);
    });

    function messageStatus(data) {
      var status = 0;
      if( data.errorCount > 0) status = 'error';
      if ( data.errorCount === 0 && data.warningCount > 0) status = 'warning';
      if ( data.errorCount === 0 && data.warningCount > 0 && data.infoCount > 0) status = 'info';
      return status;
    }

    $scope.resetFilter = function () {
      $scope.filter.error = true;
      $scope.filter.warning = true;
      $scope.filter.info = true;
      $scope.filter.processFault = true,
      $scope.filter.electricalFault = true,
      $scope.filter.mechanicalFault = true,
      $scope.filter.softwareFault = true,
      document.getElementById("dropdownFilter").innerHTML = 'Filter Auswahl <span class="filter-icon"></span>';
      document.getElementById("faultsFilter").classList.remove('active');
      
    };
    $scope.uncheck = function(elem){
        elem.stopPropagation();
//        $scope.filter.processFault = false;
//        $scope.filter.electricalFault = false;
//        $scope.filter.mechanicalFault = false;
//        $scope.filter.softwareFault = false;
//        console.log(elem.value)
//        var activeFilter = "$scope.filter." + elem.value + " = false";
//        console.log(activeFilter)
//        eval(activeFilter);
        //document.getElementById("faultsFilter").classList.remove('active');
        //document.getElementById("dropdownFilter").innerHTML = elem.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
    };
    $scope.closeOverlay = function($event){
        var elem = document.getElementById("faultsFilter");    
        //var trendingElem = document.getElementsByClassName("trending-container"); 
        if(elem.classList.contains('active')){
            elem.classList.remove('active');
        } 
        /*if(document.getElementsByClassName("trending-container open").length > 0){
            if(!$event.target.closest('.trending-container')){
                $scope.closeTrendingOverlay();
            }
        }*/
        
    };
    
    $scope.toggleOverlay = function(e){
        var elem = document.getElementById("faultsFilter");        
        if(elem.classList.contains('active')){
            elem.classList.remove('active');
        } else {
            elem.classList.add('active');
        }
        e.stopPropagation();
    };
    
    $scope.toggleOverlayError = function(e){
        var elem = document.getElementById("faultsFilterError");        
        if(elem.classList.contains('active')){
            elem.classList.remove('active');
        } else {
            elem.classList.add('active');
        }
        e.stopPropagation();
    };
   
    
    this.init = function () {
      self.getErrors()
      .then(function () {
          
        if ($scope.items.length > 0 && $scope.items[0]) {            
          $scope.selectTile($scope.items[0]);
          clickedNum = 0;
        }
      });
      self.getPlantById();
    };

    self.init();
  });
