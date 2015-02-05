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

});
