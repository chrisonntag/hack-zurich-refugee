angular
	.module('app')
  .controller('refugeeController', function($scope, $rootScope, $state, api, surveyService) {
		if(!surveyService.getSurvey().hasOwnProperty("group")) {
			$state.go('refugee.survey');
		}
  })
