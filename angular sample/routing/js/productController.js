(function(angular) {
	angular.module("vassApp.controllers")
		.controller("productController", function($scope, $routeParams, $location, Product) {
			Object.defineProperties($scope, {
				title: { value: "Product listing (" + $routeParams.categoryName + ")", writable: false, configurable: false },
				
				products: { value: [] },

				productId: { value: null, writable: true },
				product: { value: null, writable: true },
				productName: { value: null, writable: true },
				
				backToHome: { value: function() {
					$location.path("/home");
					$location.replace();
				}},

				loadProductById: { value: function() {
					var product = Product.get({ id: $scope.productId }, function() {
						$scope.product = product;
					});

				}},

				loadProducts: { value: function() {
					var resultingProducts = Product.query(function() {
						$scope.products.splice(0, $scope.products.length);

						resultingProducts.forEach(function(product) {
							$scope.products.push(product);
						});
					});
				}},

				createProduct: { value: function() {
					var product = new Product();
					product.data = { name: $scope.productName };
					product.$save(function(response) {
						$scope.products.push(response);
					});
				}},

				updateProduct: { value: function() {
					var product = Product.get({ id: $scope.productId }, function() {
						product.name = "Changed name";

						product.$update(function() {
							$scope.loadProducts();
						});
					});
				}}
			});
		});
})(angular);