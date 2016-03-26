'use strict';

angular.module('evalApp.general').controller('VoteSetupCtrl', ['$scope','$uibModalInstance', 'parties', function ($scope, $uibModalInstance, parties) {

    $scope.parties = parties;

    $scope.addParty = function () {
        $scope.parties.push({
            name: $scope.newPartyName,
            votes: 0
        });
        $scope.newPartyName = "";
    };

    $scope.removeParty = function (index) {
        $scope.parties.splice(index, 1);
    };

    $scope.startVote = function () {
        $uibModalInstance.close();
    };
}]);
