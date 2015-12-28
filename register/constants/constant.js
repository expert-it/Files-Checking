'use strict';

define(['angularmodule'], function (mod) {
	
 	var constant = {
		
		labels: {
			personal: 'Personal',
			business: 'Business'
		},
		
		placeHolders: {
			company: 'Company Name',
			firstName: 'First Name',
			lastName: 'Last Name',
			yourEmail: 'Your Email',
			newPassword: 'New Password',
			reEnterPassword: 'Re-enter Password'
		},
		buttons: {
			submit: 'Sign Up'
		},
		validations: {
			required: 'This field is required',
			emailFormat: 'Incorrect format, eg xyz@aaa.com',
			passwordStrength: 'Password must be at least 8 characters and include at  least one uppercase and one special character eg. !$%',
			wrongStringFormat: 'name cannot contain special characters eg. !$%'
		},
		regExp: {
			alphanumericPattern: /^[a-z0-9\s#-]+$/i,
			emailPattern:/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
			strongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			mediumPassword: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
		},
		alerts: {
			formErrors: 'Form validation errors',
			passwordDoesNotMatch: 'Passwords do not match, please try again'
		},
		modals: {
			successfulRegister: {
				header: 'Registration successful',
				body: 'We are now redirecting you to our portal'
			},
			unsuccessfulRegister: {
				header: 'Registration failure',
				body: 'We could not register you at this time. Please try again shortly'
			},
			buttons: {
					submit: 'okay',
					cancel: 'cancel'
				}		
		}
	};
	
	mod.constant('ekoRegisterConstant', constant);
});
