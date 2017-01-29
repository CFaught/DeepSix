(function () {

  'use strict';

  function DivesService ($http) {
    return {
      all,
      getDetail,
      create,
      deleteDive
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

    function create(diveInfo) {
      var api = "/api/v1";

      var req = {
        method: "POST",
        url: api + "/dives",
        headers: {
          'Content-Type': "application/json"
        },
        data: {dive: diveInfo}
      }

      return $http(req)
          .then(function(res) {
            return res.data;
          }).catch(function(err) {
            console.log(err.message);
          })
    }

    function deleteDive(id) {
      var api = "/api/v1";

      var req = {
        method: "DELETE",
        url: api + "/dives/" + id
      }

      return $http(req)
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
