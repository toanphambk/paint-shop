'use strict';

angular.module('duerrDiagnoseApp')
  .factory('dataFactory', function (Restangular, $q) {
    if (!appConfig.useDummyData) {
      Restangular.setBaseUrl(appConfig.serverUrl);
    }
    //var spinner = document.getElementsByClassName('spinner');
    //var servererror = document.getElementById('servererror');
    return {
      getMessages: function () {
          //spinner.show;
        return Restangular.one('api/messages').get().then(function (result) {
          var deferred = $q.defer();

          if (result) {
            deferred.resolve(result);
            //spinner.hide;
          } else {
            deferred.reject('Could not read messages!');
            //spinner.hide;
            //servererror.show;
            
          }
          return deferred.promise;
        });
      },

      getMessagesByPlant: function (_plantId) {
        return Restangular.one('api/messages', _plantId).one('plants').get().then(function (result) {
          var deferred = $q.defer();

          if (result) {
            deferred.resolve(result);
          } else {
            deferred.reject('Could not read messages of plant ' + _plantId + '!');
          }
          return deferred.promise;
        });
      },

      getPlantById: function (_id) {
        return Restangular.one('api/plants',  _id).get().then(function (result) {
          var deferred = $q.defer();

          if (result) {
            deferred.resolve(result);
          } else {
            deferred.reject('Could not read id of plant ' + _id + '!');
          }
          return deferred.promise;
        });
      },

      getPlants: function () {
        return Restangular.all('api/plants').getList().then(function (result) {
          var deferred = $q.defer();

          if (result) {
            deferred.resolve(result);
          } else {
            deferred.reject('Could not read plants!');
          }
          return deferred.promise;
        });
      },

      getErrorsByPlant: function (_plantId) {
        return Restangular.one('api/plants', _plantId).getList('errors').then(function (result) {
          var deferred = $q.defer();

          if (result) {
            deferred.resolve(result);
          } else {
            deferred.reject('Could not read errors!');
          }
          return deferred.promise;
        });
      },

      getErrorById: function (_errorId) {
        return Restangular.one('api/errors', _errorId).get().then(function (result) {
          var deferred = $q.defer();

          if (result) {
            deferred.resolve(result);
          } else {
            deferred.reject('Could not read error!');
          }
          return deferred.promise;
        });
      },

      getMainCausesFromErrors: function (_errorId) {
        return Restangular.one('api/errors', _errorId).one('maincauses').get().then(function (result) {
          var deferred = $q.defer();

          if (result) {
            deferred.resolve(result);
          } else {
            deferred.reject('Could not read main causes!');
          }
          return deferred.promise;
        });
      },

      toggleFunctionGroupHandling: function (_errorId) {
        return Restangular.one('api/errors', _errorId).post("handling", {}).then(function (result) {
          var deferred = $q.defer();

          if (result) {
            deferred.resolve(result);
            console.log(result);
          } else {
            deferred.reject('Could not read main causes!');
          }
          return deferred.promise;
        });
      }, 
      
      getVersion: function () {
        return Restangular.one('api/info/version').get().then(function (result) {
          var deferred = $q.defer();

          if (result) {
            deferred.resolve(result);
          } else {
            deferred.reject('Could not read the version!');
          }
          return deferred.promise;
        });
      }
    };
  });
