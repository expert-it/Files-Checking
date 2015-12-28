'use strict';

define(['angularmodule'], function (mod) {
	
	var injectParams = ['$http', '$q', 'ekoConstants'];
	var service = function($http, $q, ekoConstants) {
		var defer = $q.defer();
		var aService = {
			login : function(model) {
				var req = {
					method : 'POST',
					url : ekoConstants.links.login.all,
					transformRequest: function (data) {
						if (data === undefined) {
            				return data;
        				}
        				return $.param(data);
					},
					headers : { 
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
						'ekopublic': 'login'
						}
				};
				req.data = model;

				$http(req).then(function(response){
					var message = {};
					if ((response.data) && response.data.success === true) {
						message.isSuccessful = true;
						message.data = response;						
					} else if ((response.data) && response.data.success === false) {	
						message.isSuccessful = false;
						if(response.data.errors) {
						message.data = response.data.errors;
						}
				   	}
					defer.resolve(message);				   						
				 },

				 function(response) {
					var message = {};
					message.isSuccessful = false;
					defer.resolve(message);
				 }
				 );
				 
				return defer.promise;
			}
		};

		return aService;
	};

	service.$inject = injectParams;
	mod.factory('ekoLoginSvc',service);
});
