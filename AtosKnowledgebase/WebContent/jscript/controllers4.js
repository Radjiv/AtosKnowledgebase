app.controller('EditPageCtrl', function getUser($scope, $http, userIdService) {
	$scope.getId = function() {
		return userIdService.getId();
	};

	$http.get("rest/user/getUser/" + userIdService.getId()).success(
			function(response) {
				$scope.user = response;
	});
	
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
