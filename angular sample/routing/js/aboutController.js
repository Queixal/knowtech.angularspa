(function(angular) {
	angular.module("vassApp.controllers")
		.controller("aboutController", function($scope, $location) {
			Object.defineProperties($scope, {
				title: { value: "About page", writable: false, configurable: false },
				seeProducts: { value: function() {
					$location.path("/products/movies");
				}, writable: false }
			});
		});
})(angular);