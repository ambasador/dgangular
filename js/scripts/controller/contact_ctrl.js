/**
 * Created by Grenia on 15.06.2016.
 */
define(['app', 'service/mapServices'], function (app) {
    'use strict';
    app.controller('ContactController', ['cfpLoadingBar', '$scope', 'MapService', '$http', '$timeout', function (cfpLoadingBar, $scope, MapService, $http, $timeout) {
        $scope.title = "Please feel free to contact me";
        $scope.pageClass = 'page-contact';
        $scope.latitude = 51.4049489;
        $scope.longitude = 21.1769219;
        document.title = 'Digital - Legend: Contact';
        $scope.start = function() {
            cfpLoadingBar.start();
        };

        $scope.complete = function () {
            cfpLoadingBar.complete();
        };
        $scope.start();
        $scope.initLoader = true;
        $scope.init = function() {
            MapService.initialize($scope, "map-canvas");
            $scope.success = false;
            $scope.error = false;
        }
        $timeout(function() {
            $scope.complete();
            $scope.initLoader = false;
            $scope.init();
        }, 1500);
        $scope.sendMessage = function( input ) {
            $http({
                method: 'POST',
                url: 'contact-form.php',
                data: input,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
                .success( function(data) {
                    if ( data.success ) {
                        $scope.success = true;
                    } else {
                        $scope.error = true;
                    }
                } );
        }
    }]);
});
