'use strict';
define(['angularmodule'], function(mod) {

	var injectParams = [];
	var ekoRegisterModel = function() {
		
		var aModel = function(busOrCom) {

			this.firstName = '';
			this.lastName = '';
			this.email = '';
			this.password = '';
			this.verifyPassword = '';
			this.company = '';
			this.constant = {
				personal : 'personal',
				business : 'business'
			};

			if (busOrCom === this.constant.personal) {
				this.busOrCom = 'personal';
				this.accType = 'com';
				this.options = 'reg';
			} else if (busOrCom === this.constant.business) {
				this.busOrCom = 'business';				
				this.accType = 'emp';
				this.options = 'reg';
			}
			
			this.getApiObject = function () {
				var json = {
				'firstname' : this.firstName,
 				'lastname' : this.lastName,
 				'username' : this.email,
 				'regemail' : this.email,
				'regemail-confirm' : this.email,
				'pwd' : this.password,
				'pwd-confirm' : this.verifyPassword,
				'accType' : this.accType,
				'options' : this.options
				};
				
				if(this.busOrCom === 'business') {
					json.company = this.company;
				}
				return json;
			};

		};
		return aModel;
	};
	ekoRegisterModel.$inject = injectParams;
	mod.factory('ekoRegisterModel', ekoRegisterModel);

});
