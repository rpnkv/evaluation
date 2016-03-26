'use strict';

angular.module('evalApp.general', ['ui.bootstrap'])
    .controller("rootCtrl", function ($scope, $location, $uibModal) {

        initScopeVariables();

        function initScopeVariables() {
            $scope.newPartyName = "";
        }

        $scope.showResults = function () {
            $location.path('/results');
        };

        $scope.initVote = function () {
            $uibModal.open({
                templateUrl: 'voteSetup/voteSetup.html',
                controller: 'rootCtrl'
            });
        };

        $scope.addParty = function () {
            $scope.parties.push({
                name: $scope.newPartyName,
                votes: 0
            });
            $scope.newPartyName = "";
        };

        $scope.removeParty = function (index) {
            $scope.parties.splice(index,1);
        };

        $scope.startVote = function () {
            $location('/vote');
        };

        $scope.parties = [];
    });