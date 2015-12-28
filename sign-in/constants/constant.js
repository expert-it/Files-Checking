'use strict';

define(['angularmodule'], function (mod) {
	
 	var constant = {
		
		buttons: {
			submit: 'login'
		},
		alerts: {

		},
		modals: {
			successfullLogin: {
				header: 'Login successful',
				body: 'We are now redirecting you to our portal'
			},
			unsuccessfullLogin: {
				header: 'Login failure',
				body: 'Username password mismatch, please try again'
			},
			buttons: {
					submit: 'okay',
					cancel: 'cancel'
				}		
		}		
	};
	
	mod.constant('ekoLoginConstant', constant);
});
