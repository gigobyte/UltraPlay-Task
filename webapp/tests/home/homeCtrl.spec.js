describe('Controller: HomeCtrl', function() {
    beforeEach(module('taskApp'))

    var $httpBackend, ctrl

    beforeEach(inject(function($controller, _$httpBackend_) {
        ctrl = $controller('HomeCtrl', {})
        $httpBackend = _$httpBackend_

        $httpBackend.expect('GET', 'https://dkqjrms9e4r7b8bq3.stoplight-proxy.io/Sports').respond(
			200, [{Id: 999}]
		)

        $httpBackend.expect('GET', 'https://dkqjrms9e4r7b8bq3.stoplight-proxy.io/Matches/Sport/999').respond(
            200, 'list of all matches'
        )

        $httpBackend.when('GET', 'src/pages/layout.html').respond(200, '')
        $httpBackend.when('GET', 'src/pages/home/home.html').respond(200, '')
    }))

    describe('getInitialState', function() {
        it('should store the request response in the matches property', function() {
            $httpBackend.flush()
            expect(ctrl.matches).toEqual('list of all matches')
        })
    })

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation()
        $httpBackend.verifyNoOutstandingRequest()
    })
})
