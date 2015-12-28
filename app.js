'use strict';

/**
 * Load require modules and bootstrap app.
 */

require([
 'angularmodule', 'util/utilmodule', 'sign-in/signinmodule','register/registermodule'
],
function (mod) {
	var injectParams = ['$routeProvider'];
	
	function configure($routeProvider) {
		$routeProvider.when('/', {
			templateUrl : 'sample/views/index.html',
			controller : 'ekoMainCtrl',
			controllerAs : 'ekoMainCtrl'
		})
		.otherwise({
			redirectTo : '/'
		});
	}
	
	configure.$inject = injectParams;
	
	mod.config(	configure);
	
	angular.bootstrap(document,['ekoniumPublicRepositoryApp']);
}
);

