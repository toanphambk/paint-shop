'use strict';

angular.module('duerrDiagnoseApp')
  .filter('messageFilter', function () {
    return function (arr, error, warning, info, processFault, electricalFault, mechanicalFault, softwareFault) {
      if (!error && !warning && !info && !processFault && !electricalFault && !mechanicalFault && !softwareFault) {
        return false;
      } else {
        var filtered_arr = [];
        arr.forEach(function (_item) {
//          if (error && _item.productionRelevance === 0) {
//            filtered_arr.push(_item);
//          } else if (warning && _item.productionRelevance === 1) {
//            filtered_arr.push(_item);
//          } else if (info && _item.productionRelevance === 2) {
//            filtered_arr.push(_item);
//          } else 
              if (processFault && _item.iconType === 'processFault' && error && _item.productionRelevance === 0) {
            filtered_arr.push(_item);
          } else if (processFault && _item.iconType === 'processFault' && warning && _item.productionRelevance === 1) {
            filtered_arr.push(_item);
          } else if (processFault && _item.iconType === 'processFault' && info && _item.productionRelevance === 2) {
            filtered_arr.push(_item);
          } else if (electricalFault && _item.iconType === 'electricalFault' && error && _item.productionRelevance === 0) {
            filtered_arr.push(_item);
          } else if (electricalFault && _item.iconType === 'electricalFault' && warning && _item.productionRelevance === 1) {
            filtered_arr.push(_item);
          } else if (electricalFault && _item.iconType === 'electricalFault' && info && _item.productionRelevance === 2) {
            filtered_arr.push(_item);
          } else if (mechanicalFault && _item.iconType === 'mechanicalFault' && error && _item.productionRelevance === 0) {
            filtered_arr.push(_item);
          } else if (mechanicalFault && _item.iconType === 'mechanicalFault' && warning && _item.productionRelevance === 1) {
            filtered_arr.push(_item);
          } else if (mechanicalFault && _item.iconType === 'mechanicalFault' && info && _item.productionRelevance === 2) {
            filtered_arr.push(_item);
          } else if (softwareFault && _item.iconType === 'softwareFault' && error && _item.productionRelevance === 0) {
            filtered_arr.push(_item);
          } else if (softwareFault && _item.iconType === 'softwareFault' && warning && _item.productionRelevance === 1) {
            filtered_arr.push(_item);
          } else if (softwareFault && _item.iconType === 'softwareFault' && info && _item.productionRelevance === 2) {
            filtered_arr.push(_item);
          } 
        });
        return filtered_arr;
      }
    };
  });
