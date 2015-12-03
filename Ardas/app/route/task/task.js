'use strict';

angular.module('ardasApp').config(function ($stateProvider) {

    $stateProvider
        .state('task', {
            url: '/task',
            templateUrl: 'app/route/task/task.html',
            controller: 'TaskCtrl',
        })
});