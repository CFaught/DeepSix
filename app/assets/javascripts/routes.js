(function() {
  'use strict';

  angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('dives', {
            url: '/',
            templateUrl: 'dives/dives.list.html',
            controller: 'DivesController as vm'
        })
        .state('dives.detail', {
          url: 'dives/:id',
          templateUrl: 'dives/dives.details.html',
          controller: 'DivesController as vm'
        })

      $urlRouterProvider.otherwise('/')
    })
}());
