app.controller('EditPageCtrl', function getUser($scope, $http, userIdService) {	
	
	$( "#editForm" ).submit(function( event ) {
		  event.preventDefault();
		  askEdit();
	});

	function askEdit(){
		$("#dialog-confirm").html("Do you want to edit user?");
		$("#dialog-confirm").dialog({
			resizable: false,
			modal: true,
			title: "Edit user",
			height: 150,
			width: 200,
			buttons: {			
				"Yes": function () {
					edit();		
					$(this).dialog('close');
				},
	               "No": function () {
	               	$(this).dialog('close');
	               }
			}
		});	
	};
	
	function edit(){
		setTimeout(function(){ document.forms["editForm"].submit(); }, 100);
		setTimeout(function(){ window.location.href = "#/userList"; }, 200);
	};
	
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
	
	$http.get("rest/user/getUser/" + userIdService.getId()).success(
			function(response) {
				$scope.user = response;
				if(($scope.user.competenties)!=null){
					for(var i = 0; i<$scope.user.competenties.length; i++){
						selectize.addItem($scope.user.competenties[i], "silent");
					}
				}
	});
		
});
