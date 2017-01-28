(function () {

  'use strict';

  function DivesController (DivesService, $stateParams) {
    var vm = this;

    vm.createDive = createDive;

    DivesService.all()
      .then(function(data) {
        vm.dives = data;
      }).catch(function(err) {
        err.message;
      })

    if ($stateParams.id) {
      DivesService.getDetail($stateParams.id)
        .then(function(data) {
          vm.dive = data;
        })
    }

    function createDive() {
      DivesService.create(vm.dive)
        .then(function(dive) {
          vm.dives.push(dive)
        })
    }
  }



  angular
    .module('app')
    .controller('DivesController', DivesController)

}());
