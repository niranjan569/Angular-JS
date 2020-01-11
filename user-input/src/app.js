"use strict";

angular.module('myApp',[]); //creating new module

angular.module('myApp').controller('MainController',['$scope','$interval',function($scope,$interval){

	var items = ['Berry','Guava','Grapes','Apple'];

	$scope.itemIndex = null;
	$scope.currentItem = '';

	$scope.getItem = function(){
		$scope.currentItem = items[$scope.itemIndex];
	};

	$interval( function(){
		$scope.itemIndex = Math.round(Math.random() * (items.length - 1) );
		$scope.getItem();
	}, 2000);
	
}]);  //selecting created module and creating controller in it.
