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