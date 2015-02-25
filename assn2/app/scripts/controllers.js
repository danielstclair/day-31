angular.module('app.controllers', [])
.controller('HomeCTRL', function($scope){
	$scope.test = 'hello';
})
.controller('GameCTRL', function($scope, $state){
	$scope.test = 'hello';
	
})
.controller('LeaderboardCTRL', function($scope, $state){
	$scope.test = 'hello';
	
})
.controller('SettingsCTRL', function($scope, $state){
	$scope.test = 'hello';
	
})