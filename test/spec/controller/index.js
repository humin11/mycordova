'use strict';

/* jshint indent: false */
describe('Controller: IndexController', function () {

    // load the controller's module
    beforeEach(module('myCordova'));

    var IndexController,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        IndexController = $controller('IndexController', {
            $scope: scope
        });
    }));

    it('Todo初始化数量为8', function () {
        scope.todos.push({title:'abc'});
        expect(scope.todos.length).toBe(8);
    });

});
