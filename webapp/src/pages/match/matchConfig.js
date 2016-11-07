angular.module('taskApp').config(function($stateProvider) {
    $stateProvider
	.state('home.match', {
		url: '/match/:id',
		views: {
			'content@home': {
				templateUrl: 'src/pages/match/match.html',
				controller: 'MatchCtrl as matchCtrl'
			}
		}
	})
})
