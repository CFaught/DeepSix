(function() {
  'use strict';

  angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home/_home.html',
            controller: 'HomeController as vm'
        })
        $urlRouterProvider.otherwise('/')
    })

}());
