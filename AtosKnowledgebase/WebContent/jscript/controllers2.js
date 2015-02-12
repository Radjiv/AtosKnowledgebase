app.controller('AddPageCtrl', function($scope, $location, $http) {
	
	var $select = $('#comp').selectize({
		plugins: ['remove_button'],
		persist: false,
		maxItems: null,
		valueField: 'comp',
		searchField: ['comp'],
		options: [
			{comp: '.Net'},
			{comp: 'Java'},
			{comp: 'Scrum'}
		],
		render: {
			item: function(item, escape) {
				return '<div>' +
					(item.comp ? '<span class="comp">' + escape(item.comp) + '</span>' : '') +
				'</div>';
			},
			option: function(item, escape) {
				var label = item.comp;
				return '<div>' +
					'<span class="label">' + escape(label) + '</span>' +
				'</div>';
			}
		},
		create: function(input) {
			return {comp: input};
		}
	});
	
	var selectize = $select[0].selectize;
	
	$scope.userId = "";
	
	$scope.user = null;
	
	$scope.exists = false;
	
	$( "#addForm" ).submit(function( event ) {
		  event.preventDefault();
		  setTimeout(function(){ $scope.checkUserExists(); }, 500);
	});
	
	$scope.checkUserExists = function(){
		$http.get("rest/user/getUser/" + $scope.userId).success(function(response) {
			$scope.user = response;
			console.log($scope.user.firstName);
		});
		setTimeout(function(){ 		
			if($scope.user.id!=null){
				$("#inform").html("A/NL number already exists! Use another A/NL number.");
				$scope.exists = true;
			} else {
				askAdd();
			}
		}, 200);
	};
	
	function askAdd(){
		$("#dialog-confirm").html("Do you want to add user?");
		$("#dialog-confirm").dialog({
			resizable: false,
			modal: true,
			title: "Add user",
			height: 150,
			width: 200,
			buttons: {			
				"Yes": function () {
				add();
				$(this).dialog('close');
				},
	            "No": function () {
	           	$(this).dialog('close');
	            }
			}
		});	
	};
	
	function add(){
		setTimeout(function(){ 
			document.forms["addForm"].submit(); 
			document.forms["addForm"].reset();
			selectize.clear("silent");
			}, 100);
		$("#inform").html("New user added.");
	};
	
});
