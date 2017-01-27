(function () {

  'use strict';

  function DivesController (DivesService) {
    var vm = this;

    DivesService.all()
        .then(function(data) {
          vm.dives = data;
        }).catch(function(err) {
          err.message;
        })

  }
  angular
    .module('app')
    .controller('DivesController', DivesController)

}());
