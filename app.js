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

$(document).ready(function() {
    $('.accordionButton').click(function() {
        $('.accordionButton').removeClass('on');
        $('.accordionContent').slideUp('normal');
        $('.plusMinus').text('+');
        if($(this).next().is(':hidden') == true) {
            $(this).addClass('on');
            $(this).next().slideDown('normal');
            $(this).children('.plusMinus').text('-');
         } 
     });
    $('.accordionButton').mouseover(function() {
        $(this).addClass('over');
    }).mouseout(function() {
        $(this).removeClass('over');
    });
    $('.accordionContent').hide();
    
});