angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	$stateProvider
	.state('home', {
		url: "/home",
		templateUrl: "templates/home.html",
		controller: "HomeCTRL"
	})
	.state('game', {
		url: "/game",
		templateUrl: "templates/game.html",
		controller: "GameCTRL"
	})
	.state('leaderboard', {
		url: "/leaderboard",
		templateUrl: "templates/leaderboard.html",
		controller: "LeaderboardCTRL"
	})
	.state('settings', {
		url:"/settings",
		templateUrl: "templates/settings.html",
		controller: "SettingsCTRL"
	});

	$urlRouterProvider.otherwise("/home");
})