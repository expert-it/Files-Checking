'use strict';
/**
 * Reusable service to display alerts in the page
 */
define(['angularmodule'], function(mod) {
	
	var injectParams = [];
	var ekoAlertHandler =  function () {
		
		var alertHandler = {
			
			/*
			 * @param {object} scope: object to bind value to.
			 * @param {String} alertName:name of property in scope to bind to
			 * @param {String} value: String to display
			 * @param {Object} element: HTML element to place alert
			 */
			displayAlert: function(scope, alertName, value, element) {
				scope[alertName] = value;
				scope.showAlert = true;
			},
			
			/*
			 * @param {object} scope: object to bind value to.
			 * @param {String} alertName:name of property in scope to bind to
			 * @param {String} value: String to display
			 * @param {Object} element: HTML element to place alert
			 */			
			hideAlert: function(scope, alertName, value, element) {
				scope[alertName] = value;
				scope.showAlert = false;
			},

			/*
			 * @param {object} scope: object to bind value to.
			 * @param {String} alertName:name of property in scope to bind to
			 * @param {Object} element: HTML element to place alert
			 */					
			removeAlert: function (scope, alertName, element) {
				scope[alertName] = '';
				scope.showAlert = false;				
			}
		};
	
		return alertHandler;	
	};
	ekoAlertHandler.$inject = injectParams;
	mod.service('ekoAlertHandler', ekoAlertHandler);
});
