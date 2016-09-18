angular
	.module('app')
  .controller('listController', function($scope, $rootScope, $state, api, surveyService) {
		group = JSON.parse(localStorage.getItem("refufaq_user_details")).group

		var groupdId = surveyService.getSurvey().group
		$scope.results = [];

		assignResultsToScope = function(data, status, headers, config) {

			for (var i = 0 ; i < data.length; i++) {
				if (data[i].groupId == groupId) $scope.results.push(data[i])
			}
			
			$scope.requestCompleted = true
		}

		api.latestQuestions(assignResultsToScope)
  })
