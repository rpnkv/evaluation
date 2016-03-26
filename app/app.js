'use strict';

angular.module('evalApp', [
    'ngRoute',
    'evalApp.vote',
    'evalApp.results'
])
    
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/vote'});
}])
    
    .controller("rootCtrl", ['$scope', '$location', function ($scope, $location) {
        
        $scope.showResults = function () {
            $location.path('/results');
        };

        $scope.initVote = function () {
            $location.path('/vote');
        };
            
        $scope.votes = undefined;
}]);
