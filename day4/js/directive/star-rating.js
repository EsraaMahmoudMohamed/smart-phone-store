angular.module("myApp").directive('starRating', function() {

        return {
            template: '<i class="glyphicon glyphicon-star" ng-repeat="rate in rates  track by $index"></i><i class="glyphicon glyphicon-star-empty" ng-repeat="rate in norates  track by $index"></i>',


            link: function(scope, ele, attr) {


                scope.rates = new Array(parseInt(attr.rating));
                scope.norates = new Array(5-parseInt(attr.rating));

            }


        }
        })

    //----------------------------------------------------------



    angular.module("myApp").directive('starRaating', function() {


    return {
        template: '<i class="glyphicon" ng-click="doRate($index)" ng-class="{\'glyphicon-star\':!rate.empty,\'glyphicon-star-empty\':rate.empty}" ng-repeat="rate in rates  track by $index"></i>',
        scope: {
            ngModel: '='

        },
        // require: ['ngModel'],

        link: function(scope, ele, attr) {
            // scope.ngModel=0;
            scope.doRate = function(i) {

                scope.ngModel = i + 1;
                scope.render();
            }
            scope.$watch('ngModel', function(oldval, newval) {
                if (newval != oldval) {
                    scope.render();
                }

            })
            scope.render = function() {
                scope.rates = [];

                for (var i = 0; i < scope.ngModel; i++) {
                    scope.rates.push({
                        empty: false
                    });
                }
                for (var i = 0; i < 5 - scope.ngModel; i++) {
                    scope.rates.push({
                        empty: true
                    });
                }
            }
            scope.render();

            // scope.rates = new Array(parseInt(attr.rating));
            // scope.norates = new Array(5-parseInt(attr.rating));

        }


    }
});
