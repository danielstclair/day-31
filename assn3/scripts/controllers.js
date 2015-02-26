angular.module('basic.controllers', ['basic.services'])
.controller('BasicCtrl', function(
	$scope, 
	RandomArray, 
	Students, 
	dashIt
	) {

	$scope.RandomVal = function() {
		$scope.placeholder = [1, 'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];
		console.log(RandomArray($scope.placeholder));
	};
	$scope.RandomVal();

	$scope.studentPairs = function() {
		$scope.students = ['Daniel', 'Hugh', 'Gabe', 'Charlie', 'Ryan', 'Alex', 'Paul', 'Jacob', 'Travis', 'Erika']; 
		console.log(Students($scope.students));
	}
	$scope.studentPairs();

	$scope.dashingThroughTheWords = function() {
		$scope.string = $('#string').val();
		console.log(dashIt($scope.string));
		$scope.string = '';
	}
	$scope.dashingThroughTheWords();
});