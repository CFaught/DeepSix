(function() {
  'use strict';

  angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('dives', {
            url: '/',
            templateUrl: 'dives/_dives.html',
            controller: 'DivesController as vm'
        })

      $urlRouterProvider.otherwise('/')
    })
}());
