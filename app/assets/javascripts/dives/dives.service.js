(function () {

  'use strict';

  function DivesService ($http) {
    return {
      all
    }

    function all() {
      var api = "/api/v1";

      return $http.get(api + "/dives")
          .then(function(res) {
            return res.data;
          }).catch(function(err) {
            return err.message;
          })
    }
  }
  angular
    .module('app')
    .factory('DivesService', DivesService)

}());
