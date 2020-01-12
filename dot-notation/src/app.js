"use strict";

angular.module('myApp',[]);

angular.module('myApp').controller('ParentController',['$scope',function($scope){
	$scope.model = {
		name : 'Niranjan'
	};
}]);

angular.module('myApp').controller('ChildController',['$scope',function($scope){
	 $scope.model1 = {
		name1 : 'Niroop'
	};
}]);
