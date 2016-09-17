angular
	.module('app')
  .controller('surveyController', function($scope, $rootScope, $state, api) {
		attachResultsToScope = function(data, status, headers, config) {
			$scope.groups = data

			$scope.survey = {
				age: "<18",
				gender: "male"
			}

			if(data.length > 0) { $scope.survey.group =  data[0].id.toString(); }

			console.log($scope.survey)
		}

		api.allGroups(attachResultsToScope)

		$scope.submitSurvey = function() {
			localStorage.setItem("refufaq_user_details", JSON.stringify($scope.survey))
			$state.go('refugee.portal.ask')
		}
  })
