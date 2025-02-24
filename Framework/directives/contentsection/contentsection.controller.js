'use strict';

angular.module('duerrDiagnoseApp')
  .controller('ContentsectionCtrl', function ($scope, $timeout, dataFactory, REQUESTTIME) {
      
    var self = this;
    var plantsTimeout;
    $scope.plants;
    $scope.version;
    
    this.getPlants = function () {        
      dataFactory.getPlants()
        .then(function (_plants) {
            if (_plants) {
                $scope.plants = _plants;    
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
        })
        .catch(function (_error){
            //parent.document.documentElement.classList.add('offline');
            //parent.document.getElementsByTagName('body')[0].classList.add('offline');
            //$scope.ServerError = true;
        });
      
        plantsTimeout = $timeout(self.getPlants, REQUESTTIME);
    };
    
    this.getVersion = function () {
      dataFactory.getVersion().then(function (version) {
        if (version) {
          $scope.version = version;
        }
      });
    };
    
    $scope.$on("$destroy", function() {
      $timeout.cancel(plantsTimeout);
    });
    
   
    this.init = function () {
      self.getPlants();
      //self.getVersion();
    };

    self.init();
  });
