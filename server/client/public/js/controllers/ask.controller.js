angular
	.module('app')
  .controller('askController', function($scope, $rootScope, $state, api) {
		$scope.question = ""
		group = JSON.parse(localStorage.getItem("refufaq_user_details")).group

		assignResultToScope = function(data, status, headers, config) {
			$scope.result = data.data
		}

		$scope.submitQuestion = function() {
			api.askQuestion($scope.question, assignResultToScope)
			$scope.question = ""
		}
  })
