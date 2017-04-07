angular.module("myApp").controller("singleproduct",function($scope,$routeParams,Product,$rootScope){
var index=$routeParams['product_id'];

  Product.getproduct(index).then(function(data){
  // console.log(data);
  // $scope.product=data;
    $scope.product=data[index];
  $rootScope.product=$scope.product;
  console.log($rootScope.product);
  },function(err){
    console.log("error");
  })


});
