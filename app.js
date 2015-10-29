define(['angular','logger'], function (angular,logger) {
    return angular.module("app", [])
    .controller("appCtrl", ['$scope', function ($scope) {
        $scope.title = "Hello"
        logger.info("Loading controller")
    }])
})