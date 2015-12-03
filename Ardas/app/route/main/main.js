'use strict';

angular.module('ardasApp').config(function ($stateProvider) {

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'app/route/main/main.html',
            controller: 'MainCtrl',
        })
});