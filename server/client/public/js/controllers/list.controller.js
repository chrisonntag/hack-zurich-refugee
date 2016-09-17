angular
	.module('app')
  .controller('listController', function($scope, $rootScope, $state, api) {
		group = JSON.parse(localStorage.getItem("refufaq_user_details")).group

		assignResultsToScope = function(data, status, headers, config) {
			$scope.results = data
			$scope.requestCompleted = true
		}

		api.latestQuestions(assignResultsToScope)
  })
