(function () {

  'use strict';

  function DivesController (DivesService, $stateParams, $scope, $state) {
    var vm = this;
    $scope.allDives;
    vm.dives;

    $scope.buddy;

    vm.createDive = createDive;
    vm.deleteDive = deleteDive;
    vm.editDive = editDive;

    var PAGE_LENGTH = 4;

    vm.page = 0;
    vm.totalDives;
    vm.totalPages;

    $scope.paginate = function () {
      vm.dives = $scope.allDives.slice(vm.page * PAGE_LENGTH, (vm.page + 1) * PAGE_LENGTH);
    }

    vm.nextPage = function () {
      vm.page += 1;
      $scope.paginate();
    }

    vm.lastPage = function () {
      vm.page -= 1;
      $scope.paginate();
    }

    DivesService.all()
      .then(function(data) {
        $scope.allDives = data;
        vm.totalDives = $scope.allDives.length;
        vm.totalPages = Math.ceil(vm.totalDives / PAGE_LENGTH);
        $scope.paginate();
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
          $scope.$parent.allDives.push(dive)
          vm.dive = dive
          $state.go('dives.detail', dive)
          $scope.$parent.paginate();
        })
    }

    function editDive() {
      DivesService.update(vm.dive)
        .then(function(dive) {
          vm.dive = dive
          $state.go('dives.detail', dive)
        })
    }

    function deleteDive() {
      DivesService
        .deleteDive(vm.dive.id)
        .then(function() {
          var currentDives = $scope.$parent.allDives.filter(function(dive) {
            return dive.id !== vm.dive.id
          });
          $scope.$parent.allDives = currentDives;
          $scope.$parent.paginate();
        })
        .then(function() {
          $state.go('dives')
        })
    }

    $scope.calculate = function() {
      var bottomTime = Number(vm.dive.time_out) - Number(vm.dive.time_in);

      vm.dive.pg_in = "A";
      vm.dive.abt = bottomTime;
      vm.dive.time_at_depth = bottomTime;
      vm.dive.pg_out = DiveTables.letterGroup(Number(vm.dive.depth), Number(bottomTime));
      vm.dive.tnt = bottomTime + Number(vm.dive.rnt);
    }
  }



  angular
    .module('app')
    .controller('DivesController', DivesController)
}());
