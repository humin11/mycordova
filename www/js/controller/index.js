'use strict';

angular.module('myCordova')
    .controller('IndexController', function IndexController($scope, $http) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $http.get("https:///api/message", function(obj){

        })
    });
