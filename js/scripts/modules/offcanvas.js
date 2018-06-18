/**
 * Created by Grenia on 15.06.2016.
 */
define(['angularAMD', 'angular'], function (angularAMD, angular) {
    'use strict';
    angular.module("offCanvas", [])
        .constant('hamburgerHelperCssClasses', {
            hamburgerHelper: 'hamburger-helper',
            transformed: 'hamburger-transformed'
        })
        .directive('offCanvasWrap', ['$window', function ($window) {
            return {
                scope: {},
                restrict: 'C',
                link: function ($scope, element, attrs) {
                    var win = angular.element($window);

                    var sidebar = $scope.sidebar = element;

                    $scope.hide = function () {

                        sidebar.removeClass('move-left');
                        sidebar.removeClass('move-right');
                        sidebar.parent().toggleClass('overflow');
                    };

                    win.bind("resize.body", $scope.hide);

                    $scope.$on('$destroy', function () {
                        win.unbind("resize.body", $scope.hide);
                    });

                },
                controller: ['$scope', function ($scope) {
                    this.rightToggle = function () {

                        $scope.sidebar.toggleClass("move-left");
                        $scope.sidebar.parent().toggleClass('overflow');
                    };
                    this.hide = function () {
                        $scope.hide();
                    };
                }]
            };
        }])
        .directive('rightOffCanvasToggle', function () {
            return {
                require: '^offCanvasWrap',
                restrict: 'C',
                link: function ($scope, element, attrs, offCanvasWrap) {
                    element.on('click', function () {
                        offCanvasWrap.rightToggle();
                    });
                }
            };
        })
        .directive('exitOffCanvas', [function () {
            return {
                require: '^offCanvasWrap',
                restrict: 'C',
                link: function ($scope, element, attrs, offCanvasWrap) {
                    element.on('click', function () {
                        offCanvasWrap.hide();
                    });
                }
            };
        }])
        .directive('offCanvasList', [function () {
            return {
                require: '^offCanvasWrap',
                restrict: 'C',
                link: function ($scope, element, attrs, offCanvasWrap) {
                    element.on('click', function () {
                        offCanvasWrap.hide();
                    });
                }
            };
        }])
        .directive('navMenu', function () {
            return {
                restrict: 'A',
                templateUrl: 'js/scripts/directive/templates/navMenu.html'
            };
        }).directive('activeLink', ['$location', function ($location) {
        return {
            restrict: 'A',
            replace: false,
            link: function ($scope, elem) {

                $scope.$on("$routeChangeSuccess", function () {
                    var href = [$location.path()];
                    angular.forEach(elem.find('a'), function (a) {
                        a = angular.element(a);
                        if (-1 !== href.indexOf(a.attr('href'))) {
                            a.parent().addClass('active');

                        } else {
                            a.parent().removeClass('active');
                        }
                        ;
                    });
                });
            }
        }
    }]).directive("ngHamburgerHelper", ['hamburgerHelperCssClasses', function (hamburgerHelperCssClasses) {
        return {
            restrict: "E",
            scope: {
                arrowWhen: '=arrowWhen'
            },
            transclude: true,
            template: '<span class="' + hamburgerHelperCssClasses.hamburgerHelper + '" data-ng-class="{\'' + hamburgerHelperCssClasses.transformed + '\': arrowWhen}"><span></span></span>',
            replace: true,
            controller: ['$scope', '$element', function ($scope, $element) {
            }]
        }
    }]).directive('scrollup', [ '$document', '$timeout', function ($document, $timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.bind("click", function () {


                    function scrollToTop(element, to, duration) {
                        if (duration < 0) return;
                        var difference = to - element.scrollTop;
                        var perTick = difference / duration * 10;

                        $timeout(function () {
                            element.scrollTop = element.scrollTop + perTick;
                            scrollToTop(element, to, duration - 10);
                        }, 20);
                    }

                    $timeout(function () {
                        scrollToTop($document[0].body, 0, 300);
                    }, 500);
                });
            }
        };
    }]);
});