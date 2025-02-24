'use strict';

angular.module('duerrDiagnoseApp')
  .controller('StatusbarCtrl', function ($scope, $timeout, dataFactory, REQUESTTIME) {
    var self = this;
    var messagesTimeout;
    var tickTimeout;
    $scope.messages;

    var tick = function () {
      $scope.clock = Date.now();
      tickTimeout = $timeout(tick, 60000);
    };

    var getMessages = function () {
      dataFactory.getMessages()
        .then(function (_messages) {
            if (_messages) {
                $scope.messages = _messages;
                _messages.messageOrigin = 'messageForHeader';
                parent.postMessage(JSON.stringify(_messages), '*');
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
      messagesTimeout = $timeout(getMessages, REQUESTTIME);
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
