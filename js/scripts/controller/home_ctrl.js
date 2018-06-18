/**
 * Created by Grenia on 15.06.2016.
 */
define(['app', 'directive/textAnimation'], function(app) {
    app.controller('HomeController', ['$scope', '$timeout', 'cfpLoadingBar', '$q', '$http', function($scope, $timeout, cfpLoadingBar) {

        $scope.pageClass = "slide page-home";

        $scope.start = function() {
            cfpLoadingBar.start();
        };


        $scope.complete = function() {
            cfpLoadingBar.complete();
        };


        $scope.start();
        $scope.initLoader = true;
        $scope.init = function() {
            $scope.complete();
            $scope.initLoader = false;
        };



        $timeout(function() {
            $scope.init();


        }, 1500);

    }]);
});
