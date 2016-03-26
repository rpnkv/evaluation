'use strict';

angular.module('evalApp.results', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/results', {
            templateUrl: 'results/results.html',
            controller: 'ResultsCtrl'
        });
    }])

    .controller('ResultsCtrl', ['$scope', function ($scope) {
        $scope.test = "tempest keep was merely a setback";
    }]);