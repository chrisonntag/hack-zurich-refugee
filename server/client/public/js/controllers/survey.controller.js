angular
	.module('app')
  .controller('surveyController', function($scope, $rootScope, $state, surveyService, api) {
		attachResultsToScope = function(data, status, headers, config) {
			$scope.groups = data

			$scope.survey = {
				age: "<18",
				gender: "male"
			}

			if(data.length > 0) { $scope.survey.group =  data[0].id.toString(); }
		}

		api.allGroups(attachResultsToScope)

		$scope.submitSurvey = function() {
			surveyService.setSurvey($scope.survey)
			$state.go('refugee.portal.ask')
		}
  })
