/** * XML Module */
angular.module('myApp.service',[]).factory('DataSource', ['$http',function($http){
   return {
       get: function(file,callback,transform){
            $http.get(
                file,
                {transformResponse:transform}
            ).
            success(function(data, status) {
                console.log("Request succeeded");
                callback(data);
            }).
            error(function(data, status) {
                console.log("Request failed " + status);
            });
       }
   };
}]);

app.service('userIdService', function() {
	  var id="";
	  var addId = function(newId) {
	      id=newId;
	  }
	  var getId = function(){
	      return id;
	  }
	  return {
	    addId: addId,
	    getId: getId
	  };
});