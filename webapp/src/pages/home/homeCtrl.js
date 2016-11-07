angular.module('taskApp').controller('HomeCtrl', function(HomeService) {
    var controller = this

    function getInitialState() {
        HomeService.getSports().then(function(getSportsRes) {
            if(!getSportsRes) return

            HomeService.getMatches(getSportsRes[0].Id).then(function(getMatchesRes) {
                controller.matches = getMatchesRes
            })
        })
    }

    getInitialState()
})
