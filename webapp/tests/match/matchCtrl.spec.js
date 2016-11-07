describe('Controller: MatchCtrl', function() {
    beforeEach(module('taskApp'))

    var $httpBackend, ctrl

    beforeEach(inject(function($controller, _$httpBackend_) {
        ctrl = $controller('MatchCtrl', {
            $state: { params: { id: 999 }}
        })
        $httpBackend = _$httpBackend_

        $httpBackend.expect('GET', 'https://dkqjrms9e4r7b8bq3.stoplight-proxy.io/Markets/Matches/999').respond(
			200, [{Odds: [{Title: 'First Team'}, {Title: 'Second Team'}]}]
		)

        $httpBackend.when('GET', 'src/pages/layout.html').respond(200, '')
        $httpBackend.when('GET', 'src/pages/home/home.html').respond(200, '')
        $httpBackend.when('GET', 'src/pages/match/match.html').respond(200, '')
    }))

    describe('getInitialState', function() {
        it('should store the request response in the markets property', function() {
            $httpBackend.flush()
            expect(ctrl.markets).toBeDefined()
        })

        it('should get the team names from the request response', function() {
            $httpBackend.flush()
            expect(ctrl.teamOne).toEqual('First Team')
            expect(ctrl.teamTwo).toEqual('Second Team')
        })
    })

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation()
        $httpBackend.verifyNoOutstandingRequest()
    })
})
