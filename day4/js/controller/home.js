angular.module("myApp").controller("home",function($scope,Product){

Product.getallproduct().then(function(data){
console.log(data);
$scope.products=data;
},function(err){
  console.log("error");
})

})
