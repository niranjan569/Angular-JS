"use strict";

angular.module('myApp',[]); //creating new module

angular.module('myApp').controller('MainController',['$scope',function($scope){
	console.log('Hello.');
}]);  //selecting created module and creating controller in it.
