angular
.module('app')
  .controller('listController', function($scope, $rootScope, $state, api, surveyService) {

		var groupdId = surveyService.getSurvey().group

		assignResultsToScope = function(data, status, headers, config) {

			$scope.results = data;
			
			$scope.requestCompleted = true
		}

		api.latestQuestions(assignResultsToScope)
  })
