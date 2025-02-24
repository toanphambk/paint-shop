'use strict';

angular.module('duerrDiagnoseApp')
  .filter('messageFilter', function () {
    return function (arr, error, warning, info) {
      if (!error && !warning && !info) {
        return false;
      } else {
        var filtered_arr = [];
        arr.forEach(function (_item) {
          if (error && _item.productionRelevance === 0) {
            filtered_arr.push(_item);
          } else if (warning && _item.productionRelevance === 1) {
            filtered_arr.push(_item);
          } else if (info && _item.productionRelevance === 2) {
            filtered_arr.push(_item);
          }
        });
        return filtered_arr;
      }
    };
  });
