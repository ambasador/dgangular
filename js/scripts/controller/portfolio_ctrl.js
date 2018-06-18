/**
 * Created by Grenia on 15.06.2016.
 */
define(['app', 'service/portfolioService'], function(app) {
    'use strict';
    app.controller('PortfolioController', [ '$scope', '$http', '$q', '$timeout', 'cfpLoadingBar', 'portfolioService', function($scope, $http, $q, $timeout, cfpLoadingBar, portfolioService) {
        $scope.pageTitle = "Portfolio";
        document.title= 'Digital - Legend: Portfolio';
        $scope.pageClass = "slide  page-portfolio";
        var jsonGet = 'data/items.json';
        $scope.totalDisplayed = 3;
        $scope.increaseLimit = function () {
            if ($scope.limit < $scope.items.length) {
                $scope.limit += 3;
            }
        };

        $scope.start = function() {
            cfpLoadingBar.start();
        };

        $scope.complete = function () {
            cfpLoadingBar.complete();
        };
        $scope.start();
        $scope.initLoader = true;
        $scope.items = [];
        $scope.init = function() {
            $scope.getPortfolio()
                .then(function(data) {
                    $scope.items = data;
                }),
                function(status) {
                    console.log('Error:', status);
                }
        }

        $scope.getPortfolio = function() {
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
                .finally(function () {
                    $scope.complete();
                    $scope.initLoader = false;
                });
            return defer.promise;
        }

        $timeout(function() {
            $scope.init();
        }, 1500);

    }]);

});
