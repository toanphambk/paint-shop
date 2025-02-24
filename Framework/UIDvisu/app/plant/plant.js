'use strict';

angular.module('duerrDiagnoseApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('plant', {
        url: '/plant/:id-:name',
        templateUrl: 'app/plant/plant.html',
        controller: 'PlantCtrl'
      });
  });