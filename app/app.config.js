angular.
  module('soccersLeaguesApp').
  config(['$routeProvider',
    function config($routeProvider){
      $routeProvider.
        when('/', {
          templateUrl: 'leagues-list/leagues-list.template.html',
          controller: 'LeaguesListCtrl'
        }).
        when('/:leagueId/teams', {
          templateUrl: 'teams-list/teams-list.template.html',
          controller: 'TeamsListCtrl'
        }).
        otherwise('/');
    }])