(function () {

  'use strict';

  function DivesService ($http) {
    return {
      all,
      getDetail
    }

    function all() {
      var api = "/api/v1";

      return $http.get(api + "/dives")
          .then(function(res) {
            return res.data;
          }).catch(function(err) {
            console.log(err.message);
          })
    }

    function getDetail(id) {
      var api = "/api/v1";

      return $http.get(api + "/dives/" + id)
          .then(function(res) {
            return res.data;
          }).catch(function(err) {
            console.log(err.message);
          })
    }
  }
  angular
    .module('app')
    .factory('DivesService', DivesService)

}());
