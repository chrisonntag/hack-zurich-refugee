angular
	.module('app')
  .controller('refugeeController', function($scope, $rootScope, $state, api) {
		if(!localStorage.hasOwnProperty("refufaq_user_details")) {
			$state.go('refugee.survey');
		}
  })
