'use strict';

angular.module("ardasApp").controller('MainCtrl', ["$scope", "$http", "$state", "$rootScope",
    function ($scope, $http, $state, $rootScope) {
        $scope.lists = [];
        $scope.state = $state;

        $http.get('tasks.json').success(function (data) {
            $scope.list = data.forEach(function (elem) {
                if (elem.obj_status == 'active') {
                    $scope.lists.push(elem)
                }
            });

        });


        $scope.getTask = function (obj) {
            $rootScope.task = obj;
            $state.go('task')
        }

    }]);
