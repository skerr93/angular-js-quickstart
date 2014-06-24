//Option 1
// app.controller('CustomersController',functions($scope){
// 	$scope.sortBy='name'
// 	$scope.reverse=false;
// 	$scope.customers=[{joined: '2000-12-02', name:'John', city:'Philadelphia', orderTotal: 12.5096},{joined: '2000-09-12', name:'Sam', city:'Washington', orderTotal: 96.02},{joined: '2010-02-02', name:'Dan', city:'Seattle', orderTotal: 55.6523},{joined: '1999-11-22', name:'Ryan', city:'Frederick', orderTotal: 8}];
// 	$scope.doSort = function(propName){
// 		$scope.sortBy=propName;
// 		$scope.reverse=!$scope.reverse
// 	}
// });

//Option 2
// (function() {
// angular.module('customersApp')
// 	.controller('CustomersController', function($scope){
// 		$scope.sortBy='name'
// 		$scope.reverse=false;
		
// 		$scope.customers=[{joined: '2000-12-02', name:'John', city:'Philadelphia', orderTotal: 12.5096},{joined: '2000-09-12', name:'Sam', city:'Washington', orderTotal: 96.02},{joined: '2010-02-02', name:'Dan', city:'Seattle', orderTotal: 55.6523},{joined: '1999-11-22', name:'Ryan', city:'Frederick', orderTotal: 8}];
// 		$scope.doSort = function(propName){
// 			$scope.sortBy=propName;
// 			$scope.reverse=!$scope.reverse
// 		}
// 	});
// }());

//Option 3
(function() {
	var CustomersController = function($scope) {
		$scope.sortBy='name'
		$scope.reverse=false;
		
		$scope.customers=[{joined: '2000-12-02', name:'John', city:'Philadelphia', orderTotal: 12.5096},{joined: '2000-09-12', name:'Sam', city:'Washington', orderTotal: 96.02},{joined: '2010-02-02', name:'Dan', city:'Seattle', orderTotal: 55.6523},{joined: '1999-11-22', name:'Ryan', city:'Frederick', orderTotal: 8}];
		$scope.doSort = function(propName){
			$scope.sortBy=propName;
			$scope.reverse=!$scope.reverse
		}
	};

	CustomersController.$inject = ['$scope'];

	angular.module('customersApp')
		.controller('CustomersController', CustomersController);
}());