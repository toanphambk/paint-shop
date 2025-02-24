'use strict';

angular.module('duerrDiagnoseApp')
  .filter('minutesToHHmm', function () {
    return function(minutes) {
      minutes = Math.abs(minutes)
      var hours = Math.floor(minutes / 60);
      var minutes = Math.floor(minutes % 60);
      minutes = Math.round(minutes / 5) * 5;
      
      if(hours < 10) hours = "0"+hours;
      if(minutes < 10) minutes = "0"+minutes;

      var timeString = hours + ':' + minutes;

      return timeString;
  	}
  });
