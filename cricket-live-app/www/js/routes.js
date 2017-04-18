angular.module('starter').config(function($stateProvider, $urlRouterProvider,$httpProvider) {
/*
	$httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common = 'Content-Type: application/json';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
*/
	$urlRouterProvider.otherwise('live');
	$stateProvider
		.state('live', {
			url: '/live',
			templateUrl: 'templates/live.html',
			controller: 'liveCtrl',
			controllerAs: 'liveCtrl'
		})

		.state('liveline', {
			url: '/liveline',
			templateUrl: 'templates/liveline.html',
			controller: 'livelineCtrl',
			controllerAs: 'lineCtrl'
		})
	});
