/**
 * Created by Grenia on 15.06.2016.
 */

require.config({

    baseUrl: "js/scripts",
    // alias libraries paths
    paths: {
        'tweenmax': 'vendors/tweenmax/TweenMax.min',
        'async': 'vendors/requirejs/async',
        'angular': 'vendors/angular/angular.min',
        'angular-route': 'vendors/angular/angular-route.min',
        'angularAMD': 'vendors/angular/angularAMD.min',
        'ngload': 'vendors/angular/ngload',
        'angular-animate': 'vendors/angular/angular-animate.min',
        'angular-touch': 'vendors/angular/angular-touch.min',
        'angular-sanitize': 'vendors/angular/angular-sanitize.min',
        'angular-mocks': 'vendors/angular/angular-mocks',
        'angular-loading-bar': 'vendors/angular/loading-bar.min',

        // off canvas menu
        'off-canvas' : 'modules/offcanvas',
        // custom controller loader
        'HomeController': 'controller/home_ctrl',
        'ContactController': 'controller/contact_ctrl',
        'AboutController': 'controller/about_ctrl',
        'PortfolioController': 'controller/portfolio_ctrl',
        'ItemsController': 'controller/items_ctrl'
    },
    shim:{
        'tweenmax': {exports: 'TweenMax'},
        'angular': {exports: 'angular'},
        'angularAMD': {deps: ['angular']},
        'angular-route': {deps: ['angular']},
        'angular-animate': {deps: ['angular']},
        'route-animation-manager' : {deps: ['angular']},
        'angular-touch': {deps: ['angular']},
        'angular-sanitize': {deps: ['angular']},
        'off-canvas': {deps: ['angular']},
        'angular-loading-bar' : {deps: ['angular']},
        'HomeController': {deps: ['angular']},
        'ContactController': {deps: ['angular']},
        'AboutController': {deps: ['angular']},
        'PortfolioController': {deps: ['angular']},
        'ItemsController': {deps: ['angular']}

    },
    priority: ['angular'],
    // kick start application
    deps: ['app']
});