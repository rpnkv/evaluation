'use strict';

angular.module('evalApp', [
        'ngRoute',
        'evalApp.general',
        'evalApp.results',
        'evalApp.vote'
    ])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/results'});
    }]);
