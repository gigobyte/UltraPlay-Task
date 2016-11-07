angular.module('taskApp').service('MatchService', function(Restangular) {
    var service = this;

    var REST = {
        MARKETS: 'Markets',
        MATCHES: 'Matches'
    }

    var marketsUrl = Restangular.oneUrl(REST.MARKETS).oneUrl(REST.MATCHES)

    service.getMarkets = function(matchId) {
        return marketsUrl.oneUrl(matchId).get()
    }

    service.updateMarkets = function(matchId) {
        return marketsUrl.oneUrl(matchId).customGET('', {}, {'isUpdate': 'true'})
    }
})
