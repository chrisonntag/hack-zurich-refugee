angular
	.module('app')
   .controller('askController', function($scope, $rootScope, $state, api, surveyService) {
		$scope.question = ""
		$scope.userData = surveyService.getSurvey()

		console.log($scope.userData);

		assignResultToScope = function(data, status, headers, config) {
			console.log(data);
			$scope.result = data.data
		}

		$scope.submitQuestion = function() {
			api.askQuestion($scope.question, assignResultToScope)
			$scope.question = ""
		}
  })
