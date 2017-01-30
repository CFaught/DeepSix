(function () {
  'use strict';

  function PlanController ($scope) {
    var vm = this;

    // User input
    vm.time_in = 0;
    vm.time_out = 0;
    vm.depth = 0;
    vm.pg_in = "A";
    vm.surfaceInt = 0;

    var bottomTime = Number(vm.time_out) - Number(vm.time_in);

    // Calculated
    vm.time_at_depth = bottomTime;
    vm.pg_out = DiveTables.letterGroup(Number(vm.depth), Number(bottomTime));

    $scope.calculate = function() {
      var bottomTime = Number(vm.time_out) - Number(vm.time_in);

      // Calculated
      vm.time_at_depth = bottomTime;
      vm.pg_out = DiveTables.letterGroup(Number(vm.depth), Number(bottomTime));
      vm.nextPG = DiveTables.surfaceIntLetter(vm.surfaceInt, vm.pg_out);
    }
  }

  angular
      .module('app')
      .controller('PlanController', PlanController)
}());
