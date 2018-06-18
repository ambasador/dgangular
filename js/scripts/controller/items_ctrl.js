/**
 * Created by Grenia on 15.06.2016.
 */
define(['app', 'service/portfolioService'], function(app) {
    'use strict';
    app.controller('ItemsController', ['$scope', '$route', '$location', '$http', '$timeout', '$q', 'portfolioService', 'cfpLoadingBar', function($scope, $route, $location, $http, $timeout, $q, portfolioService, cfpLoadingBar) {
        $scope.pageClass = "slide page-items";
        var jsonGet = 'data/items.json?callback=JSON_CALLBACK';
        $scope.start = function() {
            cfpLoadingBar.start();
        };

        $scope.complete = function() {
            cfpLoadingBar.complete();
        };
        $scope.init = function() {
            $scope.getItem()
                .then(function(data) {
                    $scope.items = data;
                    if ($route.current.params.title) {
                        angular.forEach($scope.items, function(v, k) {
                            if (v.title == $route.current.params.title) {
                                $scope.currItem = $scope.items[k];
                                return false;
                            }
                        });

                    }

                }),
                function(status) {
                    console.log('Error:', status);
                }
        }
        $scope.getItem = function() {
            var defer = $q.defer();
            $http.get(jsonGet, {
                    cache: portfolioService
                })
                .success(function(data) {

                    defer.resolve(data)
                })
                .error(function(status, err) {
                    defer.reject(status)
                })
            return defer.promise;
        }
        $scope.start();
        $scope.initLoader = true;
        $timeout(function() {
            $scope.complete();
            $scope.initLoader = false;
            $scope.init();
        }, 1750);

    }]);

});
