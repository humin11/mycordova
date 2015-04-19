'use strict';

angular.module('myCordova', ['ionic', 'ngCookies', 'ngResource', 'ngSanitize'])
    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    }).config(function ($stateProvider, $urlRouterProvider) {
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('app', {
                url: "/app",
                abstract: true,
                views:{
                    'abc': {
                        templateUrl: "tpl/menu.html",
                        controller: 'MenuController'
                    }
                }
            })

            // the pet tab has its own child nav-view and history
            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'tpl/home.html',
                        controller: 'IndexController'
                    }
                }
            })

            .state('app.item', {
                url: '/items/:itemId',
                views: {
                    'menuContent': {
                        templateUrl: 'tpl/detail.html',
                        controller: 'IndexController'
                    }
                }
            })

            
            .state('app.sales', {
                url: '/sales',
                views: {
                    'menuContent': {
                        templateUrl: 'tpl/sales.html',
                        controller: 'SalesController'
                    }
                }
            });

        
        $urlRouterProvider.otherwise('/app/home');

    });
