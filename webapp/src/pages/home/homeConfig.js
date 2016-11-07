angular.module('taskApp').config(function($stateProvider) {
    $stateProvider
	.state('home.first', {
		url: '/',
		views: {
			'content@home': {
				templateUrl: 'src/pages/home/home.html',
				controller: 'HomeCtrl as homeCtrl'
			}
		}
	})
})
