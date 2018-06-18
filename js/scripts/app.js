/**
 * Created by Grenia on 15.06.2016.
 */
define(['angularAMD', 'angular', 'angular-route', 'angular-animate', 'angular-touch', 'angular-sanitize', 'off-canvas', 'angular-loading-bar'], function(angularAMD, angular) {
    'use strict';
    var app = angular.module("ngreq-app", ['ngRoute', 'ngAnimate', 'ngTouch', 'ngSanitize', 'offCanvas', 'chieffancypants.loadingBar']);

    var resolve = {

        delay: ['$q', '$timeout', function($q, $timeout) {
            var delay;
            delay = $q.defer();
            $timeout(delay.resolve, 450, false);
            return delay.promise;
        }]
    };

    app.config([ '$routeProvider', 'cfpLoadingBarProvider', '$locationProvider', function($routeProvider, cfpLoadingBarProvider, $locationProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
        $routeProvider
            .when("/home", angularAMD.route({
                templateUrl: 'views/home.html',
                controller: 'HomeController',
                resolve:  resolve
            }))
            .when("/portfolio", angularAMD.route({
                templateUrl: 'views/portfolio.html',
                controller: 'PortfolioController',
                resolve:  resolve
            }))
            .when("/portfolio/:title", angularAMD.route({
                templateUrl: 'views/items.html',
                controller: 'ItemsController',
                resolve: resolve

            }))
            .when("/about", angularAMD.route({
                templateUrl: 'views/about.html',
                controller: 'AboutController',
                resolve:  resolve
            }))
            .when("/contact", angularAMD.route({
                templateUrl: 'views/contact.html',
                controller: 'ContactController',
                resolve:  resolve
            }))
            .otherwise({
                redirectTo: '/home'
            });
        if(window.history && window.history.pushState){
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }
    }]);

    // Define constant to be used by Google Analytics
    app.constant("SiteName", "Digital Legend");
    // Bootstrap Angular when DOM is ready
    return angularAMD.bootstrap(app);

});