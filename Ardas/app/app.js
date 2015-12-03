'use strict';

angular.module('ardasApp', [
        'ngResource',
        'ui.router',
        'xeditable'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });