'use strict';

angular.module('duerrDiagnoseApp')
	.filter('slice', function() {
	    return function(arr, start, end) {
	        return arr.slice(start, end);
	    };
	})
