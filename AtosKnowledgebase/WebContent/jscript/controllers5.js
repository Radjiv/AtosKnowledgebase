app.controller('DeletePageCtrl', function getUser($scope, $http, userIdService) {
	$scope.getId = function() {
		return userIdService.getId();
	};

	$http.get("rest/user/deleteUser/" + userIdService.getId()).success(
			function(response) {
				$scope.user = response;
			});

});