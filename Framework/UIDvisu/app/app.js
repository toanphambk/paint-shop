'use strict';

angular.module('duerrDiagnoseApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'restangular',
  'angularUtils.directives.dirPagination',
  'angularMoment'
])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(false);
  });
