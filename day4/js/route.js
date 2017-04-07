angular.module("myApp").config(function($routeProvider){

$routeProvider.when('/',{
  templateUrl:'views/home.html',
  controller:'home'});

$routeProvider.when('/product',{
  templateUrl:'views/product.html',
  controller:'product',
  resolve:{
    allproduct:function(Product){
    				return Product.getallproduct().then(function(res){
    					console.log(res)
    					return res;
    				})
    }

  }

});



$routeProvider.when('/product/:product_id',{
  templateUrl:'views/singleproduct.html',
  controller:'singleproduct'

});


$routeProvider.when('/search',{
	templateUrl:'views/search.html',
	controller:'search'

});

});
