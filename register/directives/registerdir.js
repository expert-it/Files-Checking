'use strict';
define(['angularmodule'], function(mod) {

	var injectParam = ['$scope','ekoRegisterDataSvc', 'ekoRegisterModel', 
	'ekoRegisterConstant', 'ekoAlertHandler', '$uibModal', 'ekoViewManager'];
	var controllerDir = function($scope, ekoRegisterDataSvc, EkoRegisterModel,
		 ekoRegisterConstant, ekoAlertHandler, $uibModal, ekoViewManager) {
		var vm = this;
		vm.isDisplayPersonal = true;
		vm.isDisplayBusiness = false;
		vm.model = {};
		vm.constant = ekoRegisterConstant;
		var personalModel = new EkoRegisterModel('personal');
		var businessModel = new EkoRegisterModel('business');
		vm.model.personal = personalModel;
		vm.model.business = businessModel;
		vm.active = 'active';
		vm.notActive = '';
		vm.personalForm = {};
		vm.businessForm = {};
		vm.alert = '';
		vm.showAlert = false;
		vm.alertElement = angular.element('#register-alert');
		var registerModal = {
			scope: $scope,
			templateUrl: 'register/views/registermodal.html',
			controller: '',
			controllerAs: 'modal',
		};
		vm.modal = {
			header: '',
			body: '',
			submitButtonName:  ekoRegisterConstant.modals.buttons.submit,
			cancelButtonName: ekoRegisterConstant.modals.buttons.cancel,
			showSubmit: true,
			showCancel: true,
			submit: {},
			cancel: {}
		};
		
		vm.submitForm = function submitForm(model, form) {
		vm.modal.header = '';
		vm.modal.body = '';			
			var modalInstance = '';
			if (!form.$valid) {
				ekoAlertHandler.removeAlert(vm.alertElement);
				ekoAlertHandler.displayAlert(vm, 'alert', ekoRegisterConstant.alerts.formErrors, vm.alertElement);
				
			} else if((model.password !== model.verifyPassword)) {
				ekoAlertHandler.removeAlert(vm, 'alert', vm.alertElement);
				ekoAlertHandler.displayAlert(vm, 'alert', ekoRegisterConstant.alerts.passwordDoesNotMatch, vm.alertElement);
								
			} else if (form.$valid) {
				ekoAlertHandler.removeAlert(vm.alertElement);
				var promise = ekoRegisterDataSvc.register(model);
				promise.then(function(message) {
					if(message.isSuccess === true) {
						vm.modal.body = ekoRegisterConstant.modals.successfulRegister.body;
						vm.modal.header = ekoRegisterConstant.modals.successfulRegister.header;
						vm.modal.showSubmit = false;
						vm.modal.showCancel = false;
						registerModal.controller = successModal;
						modalInstance = $uibModal.open(registerModal);
						ekoViewManager.redirectUser('http://dev.ekonium.com:9001');								
					} else {
						vm.modal.body = (message.data) ? message.data : ekoRegisterConstant.modals.unsuccessfulRegister.body;
						vm.modal.header = ekoRegisterConstant.modals.unsuccessfulRegister.header;
						registerModal.controller = failureModal;
						vm.modal.showSubmit = true;
						vm.modal.showCancel = false;
						modalInstance = $uibModal.open(registerModal);
						vm.modal.submit = modalInstance.close();					
					}
				});
			} 
		};
		
		function successModal () {
			return vm.modal;
		}
		
		function failureModal () {
			return vm.modal;
		}

		vm.displayPersonal = function() {
			vm.isDisplayPersonal = true;
			vm.isDisplayBusiness = false;
		};

		vm.displayBusiness = function() {
			vm.isDisplayBusiness = true;
			vm.isDisplayPersonal = false;
		};
		
	};

	controllerDir.$inject = injectParam;

	injectParam = [];
	var registerDir = function() {

		return {

			templateUrl : 'register/views/register.html',
			scope : false,
			controller : controllerDir,
			controllerAs : 'register',

		};
	};
	registerDir.$inject = injectParam;
	mod.directive('ekoRegisterDir', registerDir);

});
