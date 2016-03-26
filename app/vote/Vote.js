'use strict';

angular.module('evalApp.vote', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/vote', {
            templateUrl: 'vote/vote.html',
            controller: 'VoteCtrl'
        });
    }])

    .controller('VoteCtrl', ['$scope', function ($scope) {
        $scope.test = "tempest keep was";
    }]);