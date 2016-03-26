'use strict';

angular.module('evalApp.vote', ['ngRoute', 'ui-notification'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/vote', {
            templateUrl: 'vote/vote.html',
            controller: 'VoteCtrl'
        });
    }])

    .controller('VoteCtrl', ['$scope', '$location', 'Notification', function ($scope, $location, Notification) {
        if($scope.parties == 0){
            Notification.error("Don't mess wih me! Parties list is empty!");
            $location.path('/results');
        }
        
        $scope.acceptVote = function (index) {
            $scope.parties[index].votes++;
            Notification.success("Голос принят.");
        }
    }]);