(function(angular) {
	angular.module("vassApp", ["vassApp.controllers", "ngRoute", "ngResource", "vassApp.clients"]).config(function($locationProvider, $routeProvider) {
		$locationProvider.html5Mode(true);

		$routeProvider
			.when("/home", { templateUrl: "/views/home.html", controller: "homeController" })
			.when("/about", { templateUrl: "/views/about.html", controller: "aboutController" })
			.when("/products/:categoryName", { templateUrl: "/views/products.html", controller: "productController" })
			.otherwise({ redirectTo: "/home" });
	});

	angular.module("vassApp.controllers", []);
})(angular);