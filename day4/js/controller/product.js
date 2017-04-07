angular.module("myApp").controller("product",function($scope,allproduct,$rootScope){

  // Product.getallproduct().then(function(data){
  // console.log(data);
  // $scope.products=data;
  // },function(err){
  //   console.log("error");
  // })

$scope.products=allproduct;
$rootScope.products=$scope.products;

});
