app.controller('ListPageCtrl', function getUsers($scope, $http, userIdService) {
	$http.get("rest/user/getUsers").success(function(response) {
		$scope.users = response;
	});

	$scope.onload = function() {
		$scope.orderByField = 'id';
		$scope.reverseSort = true;
		$scope.searchBy = "ID";
	};

	$scope.addNewFilter = function(filterCount, searchVal){
		var index = ["ID","Firstname","Middlename","Surname","Date of Birth","Function","Competence"];
		var nr = index.indexOf(searchVal);
		var tableElement = document.getElementById("advSearchBox");
		var newTr = document.createElement("tr");
		
		if(filterCount <= 7){
			index.splice(nr,1);
			
			//alert("De volgende filter krijgt nummer: "+ filterCount + " "+ searchVal);
			
			/*
			  data-ng-attr-id = filterCount
			  filterCount= parseInt(filterCount)+1;
			  nieuwe tr met data-ng-attr-id + span + select tag met de values uit index + input 
			 */
			newTr.innerHTML = "blabalblalbalba";
			tableElement.appendChild(newTr);
		}
	};

	
	
	$scope.saveId = function(id) {
		userIdService.addId(id);
	};

	$scope.deleteUser = function() {

	};

});
