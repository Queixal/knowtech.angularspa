(function(angular) {
	var clients = angular.module("vassApp.clients", []);

	clients.factory("Product", ["$resource", function($resource) {
		return $resource("/products/:id", { id: "@id" }, {
			update: {
				method: "PUT"
			}	
		});
	}]);
})(angular);