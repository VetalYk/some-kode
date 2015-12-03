'use strict';

angular.module("ardasApp").controller('TaskCtrl', ["$scope", "$http", "$state", "$rootScope",
    function ($scope, $http, $state, $rootScope, $document) {
        $scope.task = $rootScope.task;

        $scope.visible = false;

        $scope.chgClass = function () {
            $scope.editing = true;
        };

        $scope.getReq = function () {
            $scope.editing = false;
        };

        $scope.request = function (name) {
            $http.put('tasks.json', name)
                .success(function (data) {
                    console.log(data);
                })
                .error(function (result) {
                    /*error logic*/
                });
        }
    }

]);
