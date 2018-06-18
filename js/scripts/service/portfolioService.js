/**
 * Created by Grenia on 15.06.2016.
 */
define(['app'], function (app) {
    'use strict';
    app.factory('portfolioService',[ '$cacheFactory' , function ($cacheFactory) {
        return $cacheFactory('portfolio');
    }]);
});