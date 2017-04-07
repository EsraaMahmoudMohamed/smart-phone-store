angular.module("myApp").controller("search",function($scope,$filter,Product,$rootScope){

  Product.getallproduct().then(function(data){
  console.log(data);
  $scope.products=data;
  $rootScope.products =$scope.products;
  },function(err){
    console.log("error");
  })


});
