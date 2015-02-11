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
	
	$scope.checkUserExists = function(id){
		if (($http.get("rest/user/getUser/" + id))!=null){
			
		} else {
			alert("user exists");
		}
	};
	
	$('#btnOpenDialog').click(fnOpenNormalDialog);
	
	var fnOpenNormalDialog = function() {	
		if (document.getElementById('id').checkValidity() && 
				document.getElementById('fn').checkValidity() && 
				document.getElementById('mn').checkValidity() &&
				document.getElementById('dob').checkValidity() &&
				document.getElementById('func').checkValidity() &&
				document.getElementById('ln').checkValidity()){
			openDialog();			
		}
	};
	
	var openDialog = function(){
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
	};
	
});