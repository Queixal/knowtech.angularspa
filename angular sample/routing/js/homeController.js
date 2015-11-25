(function(angular) {
	angular.module("vassApp.controllers")
		.controller("homeController", function($scope) {
			Object.defineProperties($scope, {
				title: { value: "Hello world home page", writable: false, configurable: false }
			});
		});
})(angular);