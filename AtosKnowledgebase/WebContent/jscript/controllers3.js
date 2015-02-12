app.controller('ListPageCtrl', function getUsers($scope, $http, userIdService) {
	
	$http.get("rest/user/getUsers").success(function(response) {
		$scope.users = response;
	});
	
	$scope.onload = function() {
		$scope.orderByField = 'id';
		$scope.reverseSort = true;
		$scope.searchBy = "id";
		$scope.filterId = true;
		$scope.filterFn = true;
		$scope.filterMn = true;
		$scope.filterSn = true;
		$scope.filterDoB = true;
		$scope.filterF = true;
		$scope.filterComp = true;
		$scope.filterVip = true;
		
	};
	
	$scope.addNewFilter = function(filter){
		
		switch (filter){
		case 'id':
			$scope.filterId = !$scope.filterId;
			break;
		case 'fn':
			$scope.filterFn = !$scope.filterFn;
			break;
		case 'mn':
			$scope.filterMn = !$scope.filterMn;
			break;
		case 'sn':
			$scope.filterSn = !$scope.filterSn;
			break;
		case 'dob':
			$scope.filterDoB = !$scope.filterDoB;
			break;
		case 'f':
			$scope.filterF = !$scope.filterF;
			break;
		case 'comp':
			$scope.filterComp = !$scope.filterComp;
			break;
		case 'vip':
			$scope.filterVip = !$scope.filterVip;
			break;
		}
	};
	
	$scope.saveId = function(id) {
		userIdService.addId(id);
	};
	
	$scope.deleteUser = function(id){
		$("#dialog-confirm").html("Do you want to delete user?");
		$("#dialog-confirm").dialog({
			resizable: false,
			modal: true,
			title: "Delete user",
			height: 150,
			width: 200,
			buttons: {			
				"Yes": function () {	
					$(this).dialog('close');
					$http.post("rest/user/deleteUser/" + id);
					location.reload();
				},
	            "No": function () {
	            	$(this).dialog('close');
	            }
			}
		});	 
	};	

});
