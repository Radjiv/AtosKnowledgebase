/** * Controls all other Pages */

app.controller('PageCtrl', function($scope, $location, $http) {

});

app.controller('ToDoListXMLCtrl', function($scope, DataSource) {

	$scope.toggleDone = function() {
		var btn = document.getElementById("toggleDoneButton").checked;
		var doneTasks = document.getElementsByClassName("Klaar");

		if (btn == false) {
			for (var i = 0; i < doneTasks.length; i++) {
				doneTasks[i].style.display = 'none';
			}
		} else {
			for (var i = 0; i < doneTasks.length; i++) {
				doneTasks[i].style.display = 'table-row';
			}
		}
	};

	$scope.sprintSelector = function() {
		var sprintSelection = $scope.selectedItem;
		$scope.loadSprint(sprintSelection);
		$scope.toggleDone(); // Waarom doet deze regel het niet??
	};

	$scope.onload = function() {
		$scope.orderByField = 'status';
		$scope.reverseSort = true;
		$scope.searchBy = 'status';
		$scope.selectedItem = '2_';
	};

	$scope.loadSprint = function(value) {
		var file_ext = ".xml";
		var file_folder = "userstories/";
		var SOURCE_FILE = file_folder + "sprint" + value + file_ext;

		if (value == "2_") {
			$scope.sprintNumber = "2";
		} else {
			$scope.sprintNumber = value;
		}

		xmlTransform = function(data) {
			console.log("transform data");
			var x2js = new X2JS();
			var json = x2js.xml_str2json(data);

			return json.sprint.userstory;
		};

		setData = function(data) {
			$scope.dataSet = data;
		};

		DataSource.get(SOURCE_FILE, setData, xmlTransform);
	}
});

app.controller('AddPageCtrl', function($scope, $location, $http) {
	var config = {
		'.chosen-select' : {},
		'.chosen-select-deselect' : {
			allow_single_deselect : true
		},
		'.chosen-select-no-single' : {
			disable_search_threshold : 10
		},
		'.chosen-select-no-results' : {
			no_results_text : 'Oops, nothing found!'
		},
		'.chosen-select-width' : {
			width : "95%"
		}
	}
	for ( var selector in config) {
		$(selector).chosen(config[selector]);
	}
});

app.controller('ListPageCtrl', function getUsers($scope, $http, userIdService) {
	$http.get("rest/user/getUsers").success(function(response) {
		$scope.users = response;
	});

	$scope.onload = function() {
		$scope.orderByField = 'id';
		$scope.reverseSort = true;
	};

	$scope.toggleAdvSearch = function() {
		if ($scope.ngHide == true) {
			$scope.ngHide = false;
		} else {
			$scope.ngHide = true;
		}
	};

	$scope.saveId = function(id) {
		userIdService.addId(id);
	};

	$scope.deleteUser = function() {

	};

});

app.controller('EditPageCtrl', function getUser($scope, $http, userIdService) {
	$scope.getId = function() {
		return userIdService.getId();
	};

	$http.get("rest/user/getUser/" + userIdService.getId()).success(
			function(response) {
				$scope.user = response;
			});

	var config = {
		'.chosen-select' : {},
		'.chosen-select-deselect' : {
			allow_single_deselect : true
		},
		'.chosen-select-no-single' : {
			disable_search_threshold : 10
		},
		'.chosen-select-no-results' : {
			no_results_text : 'Oops, nothing found!'
		},
		'.chosen-select-width' : {
			width : "95%"
		}
	}
	for ( var selector in config) {
		$(selector).chosen(config[selector]);
	}

});
