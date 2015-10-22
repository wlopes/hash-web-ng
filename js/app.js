var hashTwitter = angular.module('hashTwitter', ['ngRoute',]);

hashTwitter
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
		when('/monitor', {
			templateUrl: 'app/monitor.html',
		}).
		when('/palavras', {
			templateUrl: 'app/palavras.html',
		}).
		when('/territorio', {
			templateUrl: 'app/territorio.html',
		}).
		otherwise({
			redirectTo: '/'
		});
	}]);