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
	
	$scope.checkForm = function(){
		if (document.getElementById("id")!=""//moet regx pattern worden, voor check
			|| document.getElementById("fn")!=""
			|| document.getElementById("ln")!=""){
			alert("een verplichte veld is leeg");
		} else {
			alert("verplichte veld is niet leeg");
		}
	};
	
	function fnOpenNormalDialog() {	
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
	};

	$('#btnOpenDialog').click(fnOpenNormalDialog);

	function callback(value) {
	    if (value) {
	    	$( "#addForm" ).trigger("submit");
	    } 
	};
	
});