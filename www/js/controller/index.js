'use strict';

angular.module('myCordova')
    .controller('MenuController', function(){

    })
    .controller('IndexController', function IndexController($scope, $http, $location, $stateParams, $ionicLoading, $ionicSideMenuDelegate) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        
        $scope.todos=[
        	{title:'todo 1', message:'This is todo 1',description:'<h3>This is the head page</h3><p>this is the content page</p>'},
        	{title:'todo 2', message:'This is todo 2',description:'<h3>This is the head page</h3><p>this is the content page</p>'},
        	{title:'todo 3', message:'This is todo 3',description:'<h3>This is the head page</h3><p>this is the content page</p>'},
        	{title:'todo 4', message:'This is todo 4',description:'<h3>This is the head page</h3><p>this is the content page</p>'},
        	{title:'todo 5', message:'This is todo 5',description:'<h3>This is the head page</h3><p>this is the content page</p>'},
        	{title:'todo 6', message:'This is todo 6',description:'<h3>This is the head page</h3><p>this is the content page</p>'},
        	{title:'todo 7', message:'This is todo 7',description:'<h3>This is the head page</h3><p>this is the content page</p>'}
        ];


        
        $scope.item=$scope.todos[$stateParams.itemId];
        
       	
    });
