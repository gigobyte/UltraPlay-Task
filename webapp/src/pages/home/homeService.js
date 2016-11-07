angular.module('taskApp').service('HomeService', function(Restangular) {
    var service = this;

    var REST = {
        SPORTS: 'Sports',
        SPORT: 'Sport',
        MATCHES: 'Matches'
    }

    service.getSports = function() {
        return Restangular.oneUrl(REST.SPORTS).get()
    }

    service.getMatches = function(sportsId) {
        return Restangular.oneUrl(REST.MATCHES).oneUrl(REST.SPORT).oneUrl(sportsId).get()
    }
})
