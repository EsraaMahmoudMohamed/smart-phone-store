angular.module("myApp").factory("Product", function($http, $q) {
    var def = $q.defer();


    return {

        getallproduct: function() {

            $http({
                url: 'http://localhost/Angular/day4/products.json',
                method: 'GET'

            }).then(function(res) {


                if (res.data.length) {
                    def.resolve(res.data);
                } else {

                    def.reject("no data retrive");
                }
                //end function(res.data)
            }, function(err) {

                return def.reject(err);
            })
            return def.promise;

   //end getallproductfunction
        },
      getproduct: function(id) {

        $http({
          url: 'http://localhost/Angular/day4/products.json',
            method: 'GET'

        }).then(function(res) {


            if (res.data.length) {
                def.resolve(res.data[id]);
            } else {

                def.reject("no data retrive");
            }
            //end function(res.data)
        }, function(err) {

            return def.reject(err);
        })
        return def.promise;




      }

    } // end return







});
