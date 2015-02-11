app.controller('AddPageCtrl', function($scope, $location, $http) {
	
	/**
	$scope.checkUserExists = function(id){
		if (($http.get("rest/user/getUser/" + id))!=null){
			
		} else {
			alert("user exists");
		}
	};
	**/
	
	$scope.fnOpenNormalDialog = function() {
		if (document.getElementById('id').checkValidity() && 
				document.getElementById('fn').checkValidity() && 
				document.getElementById('mn').checkValidity() &&
				document.getElementById('dob').checkValidity() &&
				document.getElementById('func').checkValidity() &&
				document.getElementById('ln').checkValidity()){
			$("#dialog-confirm").html("Do you want to add a user?");

			// Define the Dialog and its properties.
			$("#dialog-confirm").dialog({
				resizable: false,
				modal: true,
				title: "Add user",
				height: 150,
				width: 200,
				buttons: {			
					"Yes": function () {
						$(this).dialog('close');
						$( "#addForm" ).trigger("submit");
					},
	                	"No": function () {
	                		$(this).dialog('close');
	                }
				}
			});			
		}
	};	
	
	$('#select-to').selectize({
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
	
});
