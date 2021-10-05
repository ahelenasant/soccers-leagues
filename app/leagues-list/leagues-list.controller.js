angular.
  module('leaguesList').
  controller('LeaguesListCtrl', 
    function($http, $scope){
      $http.get('http://api.football-data.org/v2/competitions?plan=TIER_ONE',
      {
        headers: {'X-Auth-Token': 'bf07b2cbe8a047898b221865f92a7588'},
        dataType: 'json',
        type: 'GET',
      })
      .then(function(response){
        $scope.leagues = response.data.competitions;
        var arrayLeagues = Array.from($scope.leagues);
        arrayLeagues.forEach((league) => {
          if(league.emblemUrl == null){
            league.emblemUrl = 'images/not-found.png';
          }
        })
      })
    },
  )