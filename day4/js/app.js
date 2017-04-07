angular.module("myApp",['ngRoute']);

angular.module("myApp").run(function($rootScope,$location){

  $rootScope.search=function(){
    $location.url('/search/');
  }

});
