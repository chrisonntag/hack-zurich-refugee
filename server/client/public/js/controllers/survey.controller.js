angular
	.module('app')
  .controller('surveyController', function($scope, $rootScope, $state, api) {
		$scope.survey = {
			age: "<18",
			gender: "male",
			group: "munich",
		}

		$scope.submitSurvey = function() {
			localStorage.setItem("refufaq_user_details", JSON.stringify($scope.survey))
			$state.go('refugee.portal.list')
		}
  })
