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
	
	function fnOpenNormalDialog() {
		if (document.getElementById("id")!=""//moet regx pattern worden, voor check
				|| document.getElementById("fn")!=""
				|| document.getElementById("ln")!=""){
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
						callback(true);
					},
	                	"No": function () {
	                		$(this).dialog('close');
	                		callback(false);
	                }
				}
			});
		} else {
			$("#dialog-confirm").html("Fill in required fields!");
		}
	}

	$('#btnOpenDialog').click(fnOpenNormalDialog);

	function callback(value) {
	    if (value) {
	    	$( "#addForm" ).trigger("submit");
	    } 
	}
	
});