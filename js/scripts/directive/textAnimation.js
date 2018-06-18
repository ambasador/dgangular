define(['app', 'tweenmax'], function (app, TweenMax) {
    app.directive('textAnimation' , function(){
        return function(scope, element) {
            var ease = Elastic.easeOut;
             var el = element.children();
            TweenMax.staggerTo(el, 2, {rotation:30, y:100, repeat:-1, yoyo:true, repeatDelay:2, ease:ease});

        }
    });
});