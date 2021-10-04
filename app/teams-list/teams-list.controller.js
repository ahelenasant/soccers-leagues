angular.
  module('teamsList').
  controller('TeamsListCtrl', ['$routeParams', '$http', '$scope',
      function StandingsListCtrl($routeParams, $http, $scope){
        $http.get('http://api.football-data.org/v2/competitions/' + $routeParams.leagueId + '/teams',
        {
          headers: {'X-Auth-Token': 'bf07b2cbe8a047898b221865f92a7588'},
          dataType: 'json',
          type: 'GET',
        })
        .then(function(response){
          $scope.league = response.data;
          $scope.teams = response.data.teams;
          console.log($scope.teams);
        })
      }
    ]
  )