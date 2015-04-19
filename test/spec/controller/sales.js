'use strict';

/* jshint indent: false */
describe('Controller: SalesController', function () {

    // load the controller's module
    beforeEach(module('myCordova'));

    var SalesController,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        SalesController = $controller('SalesController', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.awesomeThings.length).toBe(3);
    });
});
