(function() {
  'use strict';

  angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('planning', {
            url: '/planning',
            templateUrl: 'plan/planning.html',
            controller: 'PlanController as vm'
        })
        .state('dives', {
            url: '/',
            templateUrl: 'dives/dives.list.html',
            controller: 'DivesController as vm'
        })
        .state('dives.new', {
          url: 'dives/new',
          templateUrl: 'dives/dives.new.html',
          controller: 'DivesController as vm'
        })
        .state('dives.edit', {
          url: 'dives/:id/edit',
          templateUrl: 'dives/dives.edit.html',
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
