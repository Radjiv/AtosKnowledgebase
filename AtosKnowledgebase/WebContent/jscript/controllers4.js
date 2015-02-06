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
	
	$scope.selectComps = function(val){		
		$('select[name="comp"]').find('option[value="'+ val +'"]').attr("selected",true);
		$('.chosen-select').trigger('chosen:updated');
	};
	
	function fnOpenNormalDialog() {
	    $("#dialog-confirm").html("Do you want to edit user?");

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
	                callback(true);
	            },
	                "No": function () {
	                $(this).dialog('close');
	                callback(false);
	            }
	        }
	    });
	}

	$('#btnOpenDialog').click(fnOpenNormalDialog);

	function callback(value) {
	    if (value) {
	    	$( "#editForm" ).trigger("submit");
	    	document.location.href = '#/userList'
	    } 
	}

});
