(function () {

  'use strict';

  function HomeController () {
    var vm = this;

    vm.user = "Bob"

  }
  angular
    .module('app')
    .controller('HomeController', HomeController)

}());
