app.controller('AddPageCtrl', function($scope, $location, $http) {
	
	/**
	$scope.checkUserExists = function(id){
		if (($http.get("rest/user/getUser/" + id))!=null){
			
		} else {
			alert("user exists");
		}
	};
	**/
	
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
