(function () {

  'use strict';

  function DivesController (DivesService, $stateParams) {
    var vm = this;

    vm.formatDate = formatDate;

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
  }

  function formatDate(date) {
    moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
  }

  angular
    .module('app')
    .controller('DivesController', DivesController)

}());
