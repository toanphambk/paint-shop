'use strict';

angular.module('duerrDiagnoseApp')
  .controller('StatusbarCtrl', function ($scope, $timeout, dataFactory) {
    var self = this;
    var messagesTimeout;
    var tickTimeout;
    $scope.messages;

    var tick = function () {
      $scope.clock = Date.now();
      tickTimeout = $timeout(tick, 60000);
    };

    var getMessages = function () {
      dataFactory.getMessages().then(function (_messages) {
        if (_messages) {
          $scope.messages = _messages;
        }
      });
      messagesTimeout = $timeout(getMessages, 1000);
    };

    $scope.$on("$destroy", function() {
      $timeout.cancel(messagesTimeout);
      $timeout.cancel(tickTimeout);
    });

    this.init = function () {
      tick();
      getMessages();
    };

    self.init();
  });
