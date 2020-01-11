"use strict";

angular.module('myApp',[]);

angular.module('myApp').controller('MainController',['$scope','$interval',function($scope,$interval){
	$scope.randomValue = 569;

	$scope.names = ["Niranjan","Niroop","Usha","Mounika","Sunayana"];

	$scope.quantity = 5;
	$scope.cost = 12.29;

	$scope.pWidth = 100;

	$interval(function(){
		$scope.randomValue = Math.round(Math.random() * 1000);
	},2000);

}]);
