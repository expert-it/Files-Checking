'use strict';
define(['angularmodule'], function(mod) {

	var injectParam = ['$scope','ekoLoginSvc', 'ekoLoginConstant', 'ekoViewManager', '$uibModal'];
	var controllerDir = function($scope, ekoLoginSvc, ekoLoginConstant, ekoViewManager, $uibModal) {
		var login = this;
		login.model = {};
		login.model.email = '';
		login.model.loginpwd = '';
		login.model.accType = 'com';
		login.model.options = 'login';
		login.constants = ekoLoginConstant;
		var loginModal = {
			scope: $scope,
			templateUrl: 'sign-in/views/sign-in-modal.html',
			controller: '',
			controllerAs: 'modal',
		};
		
		login.modal = {
			header: '',
			body: '',
			submitButtonName:  ekoLoginConstant.modals.buttons.submit,
			cancelButtonName: ekoLoginConstant.modals.buttons.cancel,
			showSubmit: true,
			showCancel: true,
			submit: {},
			cancel: {}
		};		

		login.submit = function submit(model) {
		login.modal.header = '';
		login.modal.body = '';			
			var modalInstance = '';			
			var promise = ekoLoginSvc.login(model);
			promise.then(function(message) {
				if (message.isSuccess === true) {
					login.modal.body = ekoLoginConstant.modals.successfullLogin.body;
					login.modal.header = ekoLoginConstant.modals.successfullLogin.header;
					login.modal.showSubmit = false;
					login.modal.showCancel = false;
					loginModal.controller = successModal;
					modalInstance = $uibModal.open(loginModal);
					ekoViewManager.redirectUser('http://dev.ekonium.com:9001');	
				} else {
					login.modal.body = (message.data) ? message.data : ekoLoginConstant.modals.unsuccessfullLogin.body;
					login.modal.header = ekoLoginConstant.modals.unsuccessfullLogin.header;					
					loginModal.controller = failureModal;
					login.modal.showSubmit = true;
					login.modal.showCancel = false;
					modalInstance = $uibModal.open(loginModal);
					login.modal.submit = modalInstance.close();				
				}
			});
		};

		function successModal () {
			return login.modal;
		}
		
		function failureModal () {
			return login.modal;
		}
		
	};

	controllerDir.$inject = injectParam;

	injectParam = [];
	var ekoSignInDir = function() {

		return {

			templateUrl : 'sign-in/views/sign-in.html',
			scope : false,
			controller : controllerDir,
			controllerAs : 'login',

		};
	};
	ekoSignInDir.$inject = injectParam;
	mod.directive('ekoSignInDir', ekoSignInDir);

});
