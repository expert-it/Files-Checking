'use strict';
/**
 * Reusable service to manage the state of the home page view
 * in two modes - anonymous vs authenticated.
 */
define(['angularmodule'], function (mod) {
	
	var injectParams = ['$timeout', '$http'];
	var ekoViewManager =  function ($timeout, $http) {
		this.isAnonymousOrAuthenticated = false;
		var viewManager = {
			
			redirectUser: function (redirectUrl) {
				var aTimeOut = $timeout(function () {
					window.location.assign(redirectUrl);
				}, 6000);
			},
			
			isUserLoggedIn: function () {
				this.isAnonymousOrAuthenticated = false;
				return false;
			}
		};
		
		return viewManager;
	};
	
	ekoViewManager.$inject = injectParams;
	mod.service('ekoViewManager', ekoViewManager);
});
