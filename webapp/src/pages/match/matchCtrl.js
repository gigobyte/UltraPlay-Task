angular.module('taskApp').controller('MatchCtrl', function($state, $interval, $scope, MatchService) {
    var controller = this

    function getInitialState() {
            controller.matchId = $state.params.id

            MatchService.getMarkets(controller.matchId).then(function(res) {
                if(!res) return

                controller.markets = res

                controller.teamOne = res[0].Odds[0].Title
                controller.teamTwo = res[0].Odds[1].Title
            })

            var updateInterval = $interval(controller.updateMarkets, 6000)

            $scope.$on('$destroy', function() {
                $interval.cancel(updateInterval)
            })
    }

    function attachMethods() {
        controller.updateMarkets = function() {
            MatchService.updateMarkets(controller.matchId).then(function(res) {
                //Always empty array
                console.log(res)
            })
        }
    }

    attachMethods()
    getInitialState()
})
