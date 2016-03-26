'use strict';

angular.module('evalApp.general', ['ui.bootstrap'])
    .controller("rootCtrl", ['$scope', '$location', '$uibModal' ,function ($scope, $location, $uibModal) {

        initScopeVariables();

        function initScopeVariables() {
            $scope.newPartyName = "";
            $scope.parties = [];
        }

        $scope.showResults = function () {
            $location.path('/results');
        };

        $scope.initVote = function () {
            $scope.parties = [];
            $uibModal.open({
                templateUrl: 'voteSetup/voteSetup.html',
                controller: 'VoteSetupCtrl',
                resolve : {
                    parties: function () {
                        return $scope.parties;
                    }
                }
            }).result.then(function () {
                if($scope.parties.length > 1){
                    $location.path('/vote');
                }
            })
        };
    }]);