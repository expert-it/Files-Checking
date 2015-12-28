'use strict';
define(['angularmodule'], function (mod) {
	/* @if env=='qa' */
	var constant = {
		 
		links: {
			register: { 
				individual : 'http://nds.ekonium.com:8080/EkoniumAuthenService/login/user.verify',
				business : 'http://nds.ekonium.com:8080/EkoniumAuthenService/login/user.verify'
			},
			login: {
				all: 'http://nds.ekonium.com:8080/EkoniumAuthenService/login/user.verify'
			}
		}
	};
	
	/* @endif */
		
/* @if env=='dev' */
	var constant = {

		links: {
			register: { 
				individual : 'http://dev.ekonium.com:8080/EkoniumAuthenService/login/user.verify',
				business : 'http://dev.ekonium.com:8080/EkoniumAuthenService/login/user.verify'
			},
			login: {
				all: 'http://dev.ekonium.com:8080/EkoniumAuthenService/login/user.verify'
			}
		}
		
	};	
/* @endif */
	
	mod.constant('ekoConstants', constant);
});