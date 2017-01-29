(function () {

  'use strict';

  function DivesController (DivesService, $stateParams, $scope, $state) {
    var vm = this;

    vm.createDive = createDive;
    vm.deleteDive = deleteDive;

    DivesService.all()
      .then(function(data) {
        $scope.dives = data;
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
          $scope.$parent.dives.push(dive)
          vm.dive = dive
          $state.go('dives.detail', dive)
        })
        .then(function(dive) {
          vm.dive = {}
        })
    }

    function deleteDive() {
      DivesService
        .deleteDive(vm.dive.id)
        .then(function() {
          var currentDives = $scope.$parent.dives.filter(function(dive) {
            return dive.id !== vm.dive.id
          });
          $scope.$parent.dives = currentDives;
        })
        .then(function() {
          $state.go('dives')
        })
    }
  }



  angular
    .module('app')
    .controller('DivesController', DivesController)
}());
