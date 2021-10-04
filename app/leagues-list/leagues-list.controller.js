angular.
  module('leaguesList').
  controller('LeaguesListCtrl', 
    function($http, $scope){
      $http.get('http://api.football-data.org/v2/competitions/',
      {
        headers: {'X-Auth-Token': 'bf07b2cbe8a047898b221865f92a7588'},
        dataType: 'json',
        type: 'GET',
      })
      .then(function(response){
        $scope.leagues = response.data.competitions;
        console.log($scope.leagues);
        let arrayLeagues = Array.from(this.leagues);
        arrayLeagues.forEach(league => {
          if(league.emblemUrl == null)
            league.emblemUrl = '../images/not-found.png';
        });
        
      })
    },
  )