app.controller('EditPageCtrl', function getUser($scope, $http, userIdService) {
	$scope.getId = function() {
		return userIdService.getId();
	};

	$http.get("rest/user/getUser/" + userIdService.getId()).success(
			function(response) {
				$scope.user = response;
			});
	
	var fnOpenNormalDialog = function(){	
		if (document.getElementById('id').checkValidity() && 
				document.getElementById('fn').checkValidity() && 
				document.getElementById('mn').checkValidity() &&
				document.getElementById('dob').checkValidity() &&
				document.getElementById('func').checkValidity() &&
				document.getElementById('ln').checkValidity()){
			$("#dialog-confirm").html("Do you want to edit the user?");

			// Define the Dialog and its properties.
			$("#dialog-confirm").dialog({
				resizable: false,
				modal: true,
				title: "Edit user",
				height: 150,
				width: 200,
				buttons: {			
					"Yes": function () {
						$(this).dialog('close');
						$( "#editForm" ).trigger("submit");
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
