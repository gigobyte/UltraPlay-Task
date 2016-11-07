var app = angular.module('taskApp', ['ui.router', 'restangular'])

app.config(function($stateProvider, $urlRouterProvider, RestangularProvider) {
    function configureRoutes() {
        $urlRouterProvider.when('', '/')
		$urlRouterProvider.otherwise(function() { return '/' })

        $stateProvider.state('home', {
    		url: '',
    		abstract: true,
    		views: {
    			'': {
    				templateUrl: 'src/pages/layout.html'
    			}
    		}
    	})
    }

    function configureRequests() {
        RestangularProvider.setDefaultHeaders({
            'Api-Key': 'e5d64de0-70a3-497b-aeae-a022a5c3753f',
            'isUpdate': 'false'
        })

        RestangularProvider.setBaseUrl('https://dkqjrms9e4r7b8bq3.stoplight-proxy.io/')
        RestangularProvider.setDefaultHttpFields({timeout: 10000})
    }

    configureRoutes()
    configureRequests()
})
